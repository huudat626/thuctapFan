import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SearchTrackStore, SearchTrackState } from './search-track.store';

@Injectable({ providedIn: 'root' })
export class SearchTrackQuery extends QueryEntity<SearchTrackState> {
  result$=this.select((state)=> state.result);
  key$=this.select((state)=>state.key );
  checkResultCreate$=this.select((state) => state.checkResultCreate);
  constructor(protected store: SearchTrackStore) {
    super(store);
  }

}
