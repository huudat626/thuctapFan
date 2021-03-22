import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HearderComponent } from './hearder.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    HearderComponent ,
      //Khai báo Component thuộc Module
    ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule
  ],
  exports: [
    HearderComponent  //Export để sử dụng được ở Module khác
  ]
})
export class ModuleHearder { }
