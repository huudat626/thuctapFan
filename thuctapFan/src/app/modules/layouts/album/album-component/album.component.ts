import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { AlbumService } from '../services/album.service';

// Models
import { APIAlbums } from '../../models/album-model';
import { PlaySpotifyService } from 'src/app/services/play-spotify';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  public albumId: string = '';
  public album: any | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
    private playSpotify: PlaySpotifyService
    ) { /*empty*/ }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getAlbum();
  }

  // get album id from active route
  public getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.albumId = params.id;
     // console.log('Activated Route Id', params.id);
    });
  }

  // get album info
  public getAlbum(): void {
    this.albumService.getAlbum(this.albumId).subscribe((data: any) => {
      this.album = data;
    //  console.log('Album Data:', data);
    }, (err) => {
    //  console.log('Album Error:', err);
     // console.error(err.message);
    }, () => {
    //  console.log('Album Complete!');
    });
  }


  // go back to the previous URL
  //  goBack(){
  //   this.location.back();
  // }

}
