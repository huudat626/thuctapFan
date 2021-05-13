import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProFilesSvice } from './profile.service';
import { AuthConfig } from './spotify-auth/service/auth-config.i';
import { AuthService } from './spotify-auth/service/auth.service';
import { ScopesBuilder } from './spotify-auth/service/scopes-builder';
import { TokenService } from './spotify-auth/service/token.service';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Spotify';
  // code: string;
  // state: string


  constructor(private authService: AuthService, private tokenService: TokenService, private route: Router,
    private profilesevice: ProFilesSvice,
   ){}
  ngOnInit(): void {



  }

}

