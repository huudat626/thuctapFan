import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaySpotifyService } from 'src/app/services/play-spotify';
import { APIAlbums } from '../../models/album-model';
import { PlaylistsService } from '../../playlists/service/playlists.service';

@Component({
  selector: 'app-album-track',
  templateUrl: './album-track.component.html',
  styleUrls: ['./album-track.component.less']
})
export class AlbumTrackComponent implements OnInit {
@Input()
album:any;

  // public albumId: string = '';
  // public album: any | null = null;
  constructor(

    private playSpotify: PlaySpotifyService,
  ) { }

  ngOnInit(): void {
   // console.log('tracks',this.album);

    // this.getActivatedRoute();
    // this.getPlayAlbumSong();
  }
   senUriTrack(idplaytrack: string){
    this.playSpotify.notifyPlayTrackId(idplaytrack)
  }

}
