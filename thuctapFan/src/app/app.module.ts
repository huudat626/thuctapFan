import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
//Translation

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components and Modules
import { AppComponent } from './app.component';

// Services
import { GlobalService } from './services/global.service';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AuthService } from './spotify-auth/service/auth.service';
import { TokenService } from './spotify-auth/service/token.service';

import { SpotifyAuthInterceptor } from './spotify-auth/service/spotify-auth.interceptor';
import { SpotifyAuthModule } from './spotify-auth/service/auth-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UriPipe } from './pipes/uri.pipe';
import { PipesModule } from './pipes/pipes.module';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpotifyAuthModule,
    PipesModule,

    NzCardModule,
    NzMenuModule,
    NzLayoutModule,
    BrowserAnimationsModule,

  ],
  providers: [
    GlobalService,
    AuthService,
    TokenService,
    { provide: HTTP_INTERCEPTORS,
      useClass: SpotifyAuthInterceptor,
      multi: true}
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
