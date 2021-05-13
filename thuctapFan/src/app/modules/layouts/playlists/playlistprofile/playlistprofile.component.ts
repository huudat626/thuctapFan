import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { APIPlaylist } from '../../models/playlist';
import { PlaylistsService } from '../service/playlists.service';
import { Location } from '@angular/common';
import { filter, pairwise, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tracks } from '../../models/album-model';
import { SearchTrackQuery } from 'src/app/states/state/search-track.query';
import { SearchTrackService } from 'src/app/states/state/search-track.service';
import { CreatPlaylistComponent } from '../creat-playlist/creat-playlist.component';


@Component({
  selector: 'app-playlistprofile',
  templateUrl: './playlistprofile.component.html',
  styleUrls: ['./playlistprofile.component.less']
})
export class PlaylistprofileComponent implements OnInit {

  result!: Observable<Tracks| null>;

  public playListitem:any;
  public id: string = '';

  constructor( private playlistsService: PlaylistsService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private searchSongQuery: SearchTrackQuery,
    private searchState:SearchTrackService,
    private _router: Router

    ) { }

  ngOnInit(){
    this._router.events
      .pipe(
        filter((even: any) => even instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((event: RoutesRecognized[]): any => {
     //????
console.log(event);

        if (event[0].urlAfterRedirects != '/creat_playlist') {
          this.searchState.removeSate();
        }
      });

    this.getplayList();


    this.datasearchSong();

  }
  getplayList(){

    this.activatedRoute.params
    .pipe(
      switchMap((p: any)=>{
        let usr =p['id'];
        return this.playlistsService.getplaylistTracks(usr);
      }
    )).subscribe((data:APIPlaylist)=>{

      this.playListitem= data;
      console.log('playist:', this.playListitem);

    });
  }
  datasearchSong(){
    this.result=this.searchSongQuery.result$
  }


 addplaylist(uriTrack: string, idTrack: string){
   const id=this.activatedRoute.snapshot.params.id?this.activatedRoute.snapshot.params.id: 'null';
   this.playlistsService.addTrackPlayList(id, uriTrack).subscribe((item)=>{
     this.searchState.removeTrackFromResult(idTrack);
     this.getplayList();
   })


 }


  public goBack(): void {
    this.location.back();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.searchState.removeSate();
  }
 }
