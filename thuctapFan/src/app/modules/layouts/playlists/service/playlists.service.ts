import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { APIAlbums, Item } from '../../models/album-model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APIPlaylist } from '../../models/playlist';
import { ActivatedRoute } from '@angular/router';
import { Creatplaylist } from '../../models/creatplaylist';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(private globalService: GlobalService , private route : ActivatedRoute,
    private _http: HttpClient) { /*empty*/ }

  public getPlaylistSong(playListId: string): Observable<APIPlaylist> {
    const playlistUrl: string = `me/playlists/`;

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
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
  public getuserId(): Observable<any> {
    const userIdtUrl: string = `me`;

    return this.globalService.getQuery(userIdtUrl).pipe(
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

  public creatPlayList(user_id: string, model:Creatplaylist){
    const creatplayListUrl:string= `https://api.spotify.com/v1/users/${user_id}/playlists`
  return this._http.post(creatplayListUrl, model).pipe(map((res)=> res))
  }
  public addTrackPlayList(playlist_id: string, uris:string){
    const addtrackplaylistUrl:string=`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=${uris}`
    return this._http.post(addtrackplaylistUrl,uris ).pipe(map((res)=> res))
  }
  public updateplaylist(playlist_id: string, model:Creatplaylist){
    const updatelistUrl:string=`https://api.spotify.com/v1/playlists/${playlist_id}`
    return this._http.put(updatelistUrl,model).pipe(map((res)=> res))
  }

}

