import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/album-model';
import { APIPlaylist } from '../models/playlist';
import { PlaylistsService } from './service/playlists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: 'playlists.component.html',
  styleUrls: ['./playlists.component.less']
})
export class PlaylistsComponent implements OnInit {
  public playList!: APIPlaylist ;
  public playListId: string = '';
  router: any;
  constructor(
    private playlistsService: PlaylistsService,
    private activatedRoute: ActivatedRoute
    ){

    }

  ngOnInit(): void {

    this.getPlaylist();
   //this.getActivatedRoute();
  }


  // call service to get playlist from spotify
  public getPlaylist(): void {
    this.playlistsService.getPlaylistSong(this.playListId).subscribe((data: any) => {
      this.playList = data;
      console.log('Data:', data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }

  // public navigate(track: any): void {
  //   console.log('id', track.album.id);
  //   this.router.navigate(['/album', track.album.id]);
  // }
}
