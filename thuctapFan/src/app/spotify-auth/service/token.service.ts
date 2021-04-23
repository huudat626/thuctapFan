import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { SpotifyAuthResponse } from "./spotify-auth-response.i";


@Injectable()
export class TokenService {
  constructor(private route: Router){}

  private token: string = "";
  private token$ = new BehaviorSubject(this.token);

  public get oAuthToken(): string{

    const getToken =localStorage.getItem('token')
    return getToken? this.token=getToken:"";
  }

  public clearToken(): void{
    this.token = "";
    this.token$.next(this.token);
    localStorage.removeItem('token');
    this.route.navigate(['/playlists']);
  }

  public get authHeader(): {[name: string]: string}{
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  public get authTokens(): Observable<string>{
    return this.token$.asObservable();
  }

  public setAuthToken(spotifyResponse: SpotifyAuthResponse): boolean {

    if (!!spotifyResponse && !!spotifyResponse.access_token) {
      this.token = spotifyResponse.access_token;
      localStorage.setItem('token',this.token)
    } else {
      this.token = "";
    }
    this.token$.next(this.token);
    return !!this.token
  }

}
