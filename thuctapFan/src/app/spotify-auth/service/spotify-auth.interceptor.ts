import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth-config.i';
import { ScopesBuilder } from './scopes-builder';
import { environment } from 'src/environments/environment';

@Injectable()
export class SpotifyAuthInterceptor implements HttpInterceptor {
  constructor(private tokenSvc: TokenService,
    private authService: AuthService) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.tokenSvc.authHeader);
    const baseUrl = environment.production? 'https://spotify-dfc2c.web.app' : 'http://localhost:4200';
    const authReq = req.clone({ setHeaders: this.tokenSvc.authHeader });
    return next.handle(authReq).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status == 401) {
        const scopes = new ScopesBuilder().build();
        const ac: AuthConfig = {
          client_id: 'c5e567838382421c8f04af965f70ab24',
          response_type: "token",
          redirect_uri: encodeURIComponent(baseUrl+'/authorized/'),
          state: "",
          show_dialog: true,
          scope: scopes

        }
        this.authService.configure(ac).authorize();

      };
      return throwError(error);

    }));

  }
  //   public interceptor(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     // add authorization header with jwt token if available
  //     if (this.tokenSvc.oAuthToken) {
  //         request = request.clone({
  //             setHeaders: {
  //                 Authorization: `Bearer ${this.tokenSvc.oAuthToken}`
  //             }

  //         });
  //     }

  //     return next.handle(request);
  // }
}

