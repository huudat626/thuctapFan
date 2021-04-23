import { Injectable } from '@angular/core';


import { ScopesBuilder } from './scopes-builder';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthConfig } from './auth-config.i';

@Injectable()
export class AuthService {

  private requestAuthUrl = 'https://accounts.spotify.com/authorize';
  private authorized$: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false);

  private authConfig: AuthConfig = {
    client_id: "c5e567838382421c8f04af965f70ab24",  // WebPortal App Id. Shoud be config
    response_type: "token",
    redirect_uri: "http://localhost:4200/authorized/",  // My URL
    state: "",
    show_dialog: true,
    scope: new ScopesBuilder().build()
  };

  public authorize(){
    window.location.href = this.buildAuthUrl();
  }

  //Signal someone, that router can navigate somewhere
  public authorized(): void{
    console.log('Called auth');
    this.authorized$.next(true);
  }

  public get authorizedStream(): Observable<boolean>{
    return this.authorized$.asObservable();
  }

  public configure(config: AuthConfig): AuthService{
    // Validate Config
    this.authConfig = config;
    return this;
  }

  private buildAuthUrl(): string{

    let params = [];
    for (const [key, value] of Object.entries(this.authConfig)) {
      if(typeof(value) == 'object'){
        params.push(`${key}=${(value as string[]).join(" ")}`);
      }else{
        params.push(`${key}=${value}`);
      }
    }

    return `${this.requestAuthUrl}?${params.join('&')}`;
  }
}
