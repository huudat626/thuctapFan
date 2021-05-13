import { Component, Input, OnInit } from '@angular/core';

import { NewReleasesService } from '../services/new-releases.service';
import { Router } from '@angular/router';
import { PlaySpotifyService } from 'src/app/services/play-spotify';

@Component({
  selector: 'app-use-top',
  templateUrl: './use-top.component.html',
  styleUrls: ['./use-top.component.less']
})
export class UseTopComponent implements OnInit {

  @Input() useTop !: any;

  constructor(
    private useTopService: NewReleasesService,
    private router: Router,
    private playSpotify: PlaySpotifyService,
  ) { }

  ngOnInit(): void {
    // console.log("log:",this.useTop.limit);
    console.log("sdata", this.useTop);
    this.navigate;


  }
  // public navigate(item: any): void {
  //   console.log('id', item.track.id);
  //    this.router.navigate(['/album', track.album.id]);

  public navigate(item: any): void {
    let useTopId: number = 0;
    console.log('id', item.track.album.id);
    item.track.type === 'artist' ? useTopId = item.track.album.id : useTopId = item.track.album.id;
    console.log('new release type:', item.type);
    console.log('New Release Id:', useTopId);

    this.router.navigate(['/album', useTopId]);
  }
}
// senUriTrack(idplaytrack: string){
//   this.playSpotify.notifyPlayTrackId(idplaytrack)
// }
//}
