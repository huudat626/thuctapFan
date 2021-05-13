import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
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
import { SearchService } from './modules/layouts/search/services/search.service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
//import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';






@NgModule({
  declarations: [
    AppComponent,
     NavBarComponent,




  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpotifyAuthModule,
    PipesModule,
    NzIconModule,
    NzCardModule,
    NzMenuModule,
    NzLayoutModule,
    NzDropDownModule,
    BrowserAnimationsModule,
    NzInputModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    SearchService,
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
