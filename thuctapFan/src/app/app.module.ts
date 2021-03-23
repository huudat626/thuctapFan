import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { ModuleHearder } from './modules/layouts/hearder/hearder.modul';
import { MenuComponent } from './modules/layouts/menu/menu.component';
import { FooterComponent } from './modules/layouts/footer/footer.component';
import { ModuleMenu } from './modules/layouts/menu/menu.module';
import { ModuleFooter } from './modules/layouts/footer/footer.module';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    // MenuComponent,
    // FooderComponent,



  ],
  imports: [
    ModuleHearder,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
     NzBreadCrumbModule,
     ModuleMenu,
     ModuleFooter



  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
