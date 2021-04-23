import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { fromPairs } from 'lodash';

import { AuthService } from './auth.service';
import { SpotifyAuthResponse } from './spotify-auth-response.i';
import { TokenService } from './token.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private tokenSvc: TokenService, private route:Router){}

  public canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    return this.canActivateChild(next, state);
  }

  public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
    const response = this.extractApiResponse(next.fragment);
    console.log(next.fragment);

    if(response){
      console.log(response);

      this.tokenSvc.setAuthToken(response);
      this.route.navigate(['/home']);
    }
    return !!response;
  }

  private extractApiResponse(fragment: string): SpotifyAuthResponse | null{
    if(!!fragment){
      return fromPairs(fragment.split('&').map((s) => s.split('='))) as SpotifyAuthResponse;
    }
    return null;
  }
}
