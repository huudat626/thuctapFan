import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ListsongComponent } from './listsong/listsong.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    PlaylistsComponent,
    ListsongComponent,
  ],
  imports: [
    CommonModule,
    NzCardModule,
    PlaylistsRoutingModule,
    HttpClientModule,
    PipesModule,
    NzTableModule,
    NzIconModule
  ]
})
export class PlaylistsModule { }
