import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthConfig } from './spotify-auth/service/auth-config.i';
import { AuthService } from './spotify-auth/service/auth.service';
import { ScopesBuilder } from './spotify-auth/service/scopes-builder';
import { TokenService } from './spotify-auth/service/token.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'thuctapFan';
  // code: string;
  // state: string

  constructor(private authService: AuthService, private tokenService: TokenService, private route: Router){}
  ngOnInit(): void {

    if(!!this.tokenService.oAuthToken){


    }
   // this.login();


  }

  login(){

   // window.location.href="https://accounts.spotify.com/authorize?client_id=32da9e39aa4443e69d349930645c1b8e&response_type=code&redirect_uri="+encodeURIComponent("http://localhost:4200/callback-login/")+"&scope=user-read-private%20user-read-email&state=34fFs29kd09"
   const scopes = new ScopesBuilder().build();
   const ac:AuthConfig={
    client_id: 'c5e567838382421c8f04af965f70ab24',
    response_type: "token",
    redirect_uri: encodeURIComponent('http://localhost:4200/authorized/'),
    state: "",
    show_dialog: true,
    scope: scopes

    }
    this.authService.configure(ac).authorize();
  }
logout():void{
     this.tokenService.clearToken();
    // this.route.navigate['/playlist'];
   }
}

