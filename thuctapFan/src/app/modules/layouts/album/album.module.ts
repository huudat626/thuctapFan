import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules and Components
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album-component/album.component';

// Services
import { AlbumService } from './services/album.service';
import { PipesModule } from 'src/app/pipes/pipes.module';

// Pipes
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    PipesModule,
    NzCardModule
  ],
  providers: [
    AlbumService,
  ]
})
export class AlbumModule { }
