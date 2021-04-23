import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { TokenService } from './token.service';

@Injectable()
export  class SpotifyAuthInterceptor implements HttpInterceptor {
  constructor(private tokenSvc: TokenService) {}



   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
console.log(this.tokenSvc.authHeader);

    const authReq = req.clone({ setHeaders: this.tokenSvc.authHeader });
    return next.handle(authReq);

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

