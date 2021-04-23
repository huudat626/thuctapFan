import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsongComponent } from './listsong/listsong.component';


import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [
  { // route => /playlists
  path: '',
  component: PlaylistsComponent
  },
  {
    path:'',
    component:ListsongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
