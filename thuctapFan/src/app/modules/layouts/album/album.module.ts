import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
// Modules and Components
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album-component/album.component';

// Services
import { AlbumService } from './services/album.service';
import { PipesModule } from 'src/app/pipes/pipes.module';

// Pipes
import { NzCardModule } from 'ng-zorro-antd/card';
import { PlaylistsModule } from '../playlists/playlists.module';
import { AlbumTrackComponent } from './album-track/album-track.component';

@NgModule({
  declarations: [
    AlbumComponent,
    AlbumTrackComponent,


  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    PipesModule,
    NzCardModule,
    NzTableModule,
    NzIconModule

  ],
  exports: [AlbumTrackComponent],
  providers: [
    AlbumService,
  ]
})
export class AlbumModule { }
