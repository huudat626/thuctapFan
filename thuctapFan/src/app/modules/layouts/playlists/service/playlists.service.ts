import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { APIAlbums, Item } from '../../models/album-model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APIPlaylist } from '../../models/playlist';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(private globalService: GlobalService , private route : ActivatedRoute) { /*empty*/ }

  public getPlaylistSong(playListId: string): Observable<APIPlaylist> {
    const playlistUrl: string = `me/playlists/${ playListId }`;

    return this.globalService.getQuery(playlistUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
  public getplaylistTracks(playListId: string): Observable<APIPlaylist> {
    const playlistUrl: string = `playlists/${ playListId }`;

    return this.globalService.getQuery(playlistUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          return res['tracks'];
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}


