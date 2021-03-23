import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [
    FooterComponent ,
      //Khai báo Component thuộc Module
    ],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [
    FooterComponent  //Export để sử dụng được ở Module khác
  ]
})
export class ModuleFooter { }
