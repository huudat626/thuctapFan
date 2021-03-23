import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuComponent ,
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
    MenuComponent  //Export để sử dụng được ở Module khác
  ]
})
export class ModuleMenu { }
