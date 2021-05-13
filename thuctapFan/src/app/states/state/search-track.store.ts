import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Tracks } from 'src/app/modules/layouts/models/album-model';
import { SearchTrack } from './search-track.model';

export interface SearchTrackState extends EntityState<SearchTrack> {
  result: Tracks | null ;
  key: string;
  checkResultCreate: boolean;
}
export function creatInintialState():SearchTrackState{
  return{
    result: null,
    key:'',
    checkResultCreate: false

  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'searchTrack' })
export class SearchTrackStore extends EntityStore<SearchTrackState> {

  constructor() {
    super();
  }

}
