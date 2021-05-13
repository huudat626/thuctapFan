import { Component, OnInit, Input } from '@angular/core';
import { PlaySpotifyService } from 'src/app/services/play-spotify';

@Component({
  selector: 'app-artist-top-track',
  templateUrl: './artist-top-track.component.html',
  styleUrls: ['./artist-top-track.component.scss']
})
export class ArtistTopTrackComponent implements OnInit {
  @Input() topTrack: any;
  // public play: boolean = false;

  constructor(private playSpotify: PlaySpotifyService,) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  // updates variable that controls player visibility
  // public player(): void {
  //   this.play = !this.play;
  //   console.log('play:', this.play);
  // }
  senUriTrack(idplaytrack: string){
    this.playSpotify.notifyPlayTrackId(idplaytrack)
  }
}
