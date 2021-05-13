import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Creatplaylist } from '../../models/creatplaylist';
import { Router } from '@angular/router';
import { SearchService } from '../../search/services/search.service';
import { PlaylistsService } from '../service/playlists.service';
import { SearchTrackService } from 'src/app/states/state/search-track.service';
import { SearchTrackQuery } from 'src/app/states/state/search-track.query';
import { Observable } from 'rxjs';
import { Tracks } from '../../models/album-model';
import { mergeMap, tap } from 'rxjs/operators';
import { SearchTrackStore } from 'src/app/states/state/search-track.store';


@Component({
  selector: 'app-creat-playlist',
  templateUrl: './creat-playlist.component.html',
  styleUrls: ['./creat-playlist.component.less']
})
export class CreatPlaylistComponent implements OnInit {
  // @Input() result!: any;
  result$!: Observable<Tracks | null>;

  public idList!: string;
  public user: any;
  public userId: string = '';
  public tracksList: any[] = [];
  public moreTracks: boolean = false;
  constructor(private playlistsService: PlaylistsService,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService, private router: Router,
    private searchState: SearchTrackService,
    private searchSongQuery: SearchTrackQuery,
    private searctrack: SearchTrackStore
  ) { }

  ngOnInit() {
    // this.creatPlaylist();
    //this.search(term: String);
    this.result$ = this.searchSongQuery.result$;
    this.getDataUser();

  }
  public creatPlaylist() {
    let model: Creatplaylist = {
      name: 'playlist_new',
      description: 'new playlist',
      public: false
    }
    this.playlistsService.getuserId().subscribe((data: any) => {
      console.log('id', data);
      this.playlistsService.creatPlayList(data.id, model).subscribe((creat: any) => {
        this.idList = creat.id
        console.log(creat)
        console.log(this.idList);
      }
      )
    }
    )
  }
  search(query: string): void {
    console.log('Term to find:', query);
    if (query) {
      this.searchState.get(query, 'track').subscribe();
      console.log('yes');

    } else {
      console.log('eroor');
    }





  }
  //   this.searchService.getTracksAndArtists(term).subscribe((data: any) => {
  //     // this.artistsList = data.artists.items;
  //     this.tracksList = data.tracks.items;

  //     console.log('Data:', data);
  //     console.log('da:', this.tracksList);

  //   }, (err) => {
  //     console.log('Error:', err);
  //     console.error(err.message);
  //   }, () => {
  //     console.log('Complete!');
  //   });
  // }
  getDataUser() {
    this.playlistsService.getuserId().subscribe((user: any) => {
      this.user = user;
      console.log('user', this.user);
    })
  }
  addTrack(uriTrack: string, id: string) {
    let model: Creatplaylist = {
      name: 'playlist_new',
      description: 'new playlist',
      public: false
    }
    this.playlistsService.creatPlayList(this.user.id, model)
      .pipe(
        mergeMap((playlist: any): any => {
          console.log('e', playlist);
          if (playlist) {
            return this.playlistsService.addTrackPlayList(playlist.id, uriTrack).pipe(
              tap((item) => {
                this.searchState.updateStatus();
                this.removeTrackFromResult(id)
                console.log('item', item);
                this.router.navigate(['/playlists/', playlist.id])

              })
            )

          }
          else {
            console.log('eror');

          }
        }
        )).subscribe();
  }
  removeTrackFromResult(id: string) {
    const searchSongValue = this.searctrack.getValue();
    console.log('val$', searchSongValue);
    if (searchSongValue.result) {
      const temp = {
        ...searchSongValue.result,
        items: searchSongValue.result?.items.filter((e) => e.id !== id),
      };
      this.searctrack.update({
        ...searchSongValue,
        result: temp
      });
    }
  }


}
