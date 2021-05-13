import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { map, tap } from 'rxjs/operators';
import { SearchTrack } from './search-track.model';
import { SearchTrackStore } from './search-track.store';

@Injectable({ providedIn: 'root' })
export class SearchTrackService {

  constructor(private searchTrackStore: SearchTrackStore, private http: HttpClient) {
  }


    get(query: string, type: string) {
      return this.http
        .get<any>(
         ` https://api.spotify.com/v1/search?q=${query}&offset=0&limit=20&type=${type}&market=US`
        )
        .pipe(
          map((res) => res.tracks),
          tap((entities) => {
            const searchSong = {
              result: entities,
              key: query,
            };

            this.searchTrackStore.update(searchSong);
          })
        );
    }


  add(searchTrack: SearchTrack) {
    this.searchTrackStore.add(searchTrack);
  }

  //  update(id, searchTrack: Partial<SearchTrack>) {
  //    this.searchTrackStore.update(id, searchTrack);
  //  }

  remove(id: ID) {
    this.searchTrackStore.remove(id);
  }
  updateStatus(){
    const searchSongValue1 = this.searchTrackStore.getValue();
    const temp = {
     ...searchSongValue1,
     checkResultCreate: true,
    };
    this.searchTrackStore.update(temp);
   }
   removeTrackFromResult(id: string) {
    const searchSongValue = this.searchTrackStore.getValue();
    console.log('val$', searchSongValue);
    if (searchSongValue.result) {
      const temp = {
        ...searchSongValue.result,
        items: searchSongValue.result?.items.filter((e) => e.id !== id),
      };
      this.searchTrackStore.update({
        ...searchSongValue,
        result: temp
      });
    }
  }
  removeSate(){
    const seachTrack= {
      result: null,
      key: '',
    };
    this.searchTrackStore.update(seachTrack);

  }

}
