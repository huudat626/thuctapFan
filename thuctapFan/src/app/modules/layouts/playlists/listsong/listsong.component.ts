import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gt } from 'lodash';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { PlaySpotifyService } from 'src/app/services/play-spotify';
import { APIPlaylist, Item } from '../../models/playlist';
import { PlaylistsService } from '../service/playlists.service';

@Component({
  selector: 'app-listsong',
  templateUrl: './listsong.component.html',
  styleUrls: ['./listsong.component.less']
})
export class ListsongComponent implements OnInit {
  @Input()
  playListitem: any;
  public playList!: APIPlaylist;
  // public playListitem:any;
  public playListId: string = '';
  id: string ="";
  private uri!: string;
  private playTrack!: Subscription;
  constructor(
    private playlistsService: PlaylistsService,
    private activatedRoute: ActivatedRoute,
    private playSpotify: PlaySpotifyService,
    ){}
  ngOnInit(): void {
    // this.getPlaylistsong();
   // this.getPlaylist();

  }

  // public getplaylistTracks(): Observable<Item[]> {



  //   const playlistUrl: string = `/playlists/${this.id }`;

  //   return this.globalService.getQuery(playlistUrl).pipe(
  //     map((res: any) => {
  //       if (!res) {
  //         throw new Error('Value expected!');
  //       } else {
  //         return res['tracks'];
  //       }
  //     }),
  //     catchError((err) => {
  //       throw new Error(err.message);
  //     }));
  // }
  // public getPlaylistsong(): void {
  //   this.id = this.activatedRoute.snapshot.params.id? this.activatedRoute.snapshot.params.id :"khong tim tháy";
  //   console.log(this.id);

  //   this.playlistsService.getplaylistTracks(this.id).subscribe((data: APIPlaylist) => {
  //     this.playList = data;
  //     console.log('Dataplay:', data);
  //   }, (err) => {
  //     console.log('Error:', err);
  //     console.error(err.message);
  //   }, () => {
  //     console.log('Complete!');
  //   });
  // }


  senUriTrack(idplaytrack: string){
    this.playSpotify.notifyPlayTrackId(idplaytrack)
  }
}
