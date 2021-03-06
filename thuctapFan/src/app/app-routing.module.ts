import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatPlaylistComponent } from './modules/layouts/playlists/creat-playlist/creat-playlist.component';
import { ListsongComponent } from './modules/layouts/playlists/listsong/listsong.component';
import { PlaylistprofileComponent } from './modules/layouts/playlists/playlistprofile/playlistprofile.component';

const routes: Routes = [
  { // default route => /home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'authorized',
  loadChildren: ()=> import('./spotify-auth/service/auth-module').then(m=>m.SpotifyAuthModule)
 },
  { // route => /home/language
    path: 'home',
    loadChildren: () => import('./modules/layouts/home/home.module').then(m => m.HomeModule)
  },


  { // route => /album/id
    path: 'album/:id',
    loadChildren: () => import('./modules/layouts/album/album.module').then(m => m.AlbumModule)
  },
{ // route => /search
  path: 'search',
  loadChildren: () => import('./modules/layouts/search/search.module').then(m => m.SearchModule)
},
{ // route => /search/term
  path: 'search/:term',
  loadChildren: () => import('./modules/layouts/search/search.module').then(m => m.SearchModule)
},
{ // route => /artist/id
  path: 'artist/:id',
  loadChildren: () => import('./modules/layouts/artist/artist.module').then(m => m.ArtistModule)
},
{ // route => /album/id
  path: 'album/:id',
  loadChildren: () => import('./modules/layouts/album/album.module').then(m => m.AlbumModule)
},
// {
// path: 'login',
//   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
// },

{
  path:"playlists",
  loadChildren: ()=> import('./modules/layouts/playlists/playlists.module').then(m=>m.PlaylistsModule)
},
// {
//   path:"playlists/:id",
//   loadChildren:()=> import("./modules/layouts/playlists/playlists.module").then(m=>m.PlaylistsModule)
// },

{
  path:"playlists/:id",
  component: PlaylistprofileComponent
},
{
  path:"playlists/:id",
  component: CreatPlaylistComponent
},
{
  path:"creat_playlist",
  component: CreatPlaylistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
