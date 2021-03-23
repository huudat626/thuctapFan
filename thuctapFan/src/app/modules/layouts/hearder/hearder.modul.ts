import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HearderComponent } from './hearder.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



@NgModule({
  declarations: [
    HearderComponent ,
      //Khai báo Component thuộc Module
    ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule,
    NzDropDownModule
  ],
  exports: [
    HearderComponent  //Export để sử dụng được ở Module khác
  ]
})
export class ModuleHearder { }
