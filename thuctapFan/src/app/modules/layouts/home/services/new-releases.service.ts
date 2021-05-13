import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models


// Services
import { GlobalService } from 'src/app/services/global.service';
import { Item } from '../../models/album-model';
import { FormattedNewReleases } from '../../models/new-releases-model';
import { FormatteUseTop } from '../../models/topplay';


@Injectable() // service provided in module
export class NewReleasesService {
  private newReleasesUrl: string = 'browse/new-releases?country=VN&limit=10&offset=5';

  constructor(private globalService: GlobalService) { /*empty*/ }

  public getNewReleases(): Observable<FormattedNewReleases[]> {
    return this.globalService.getQuery(this.newReleasesUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          const formattedItems: FormattedNewReleases[] = res.albums.items.map((album: any) => {
            return {
              id: album.id,
              images: album.images,
              name: album.name,
              artists: album.artists,
              type: album.type
             };
            });
          return formattedItems;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
  public getUserTop(): Observable<any> {
    const usetopUrl: string = `me/player/recently-played`;

    return this.globalService.getQuery(usetopUrl).pipe(
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

  // public getUserTop(): Observable<FormatteUseTop[]> {
  //   const usetopUrl: string = `me/player/recently-played`;
  //   return this.globalService.getQuery(usetopUrl).pipe(
  //     map((res: any) => {
  //       if (!res) {
  //         throw new Error('Value expected!');
  //       } else {
  //         const formattedItems: FormatteUseTop[] = res.albums.items.map((album: any) => {
  //           return {
  //             id: album.id,
  //             images: album.images,
  //             name: album.name,
  //             artists: album.artists,
  //             type: album.type
  //            };
  //           });
  //         return formattedItems;
  //       }
  //     }),
  //     catchError((err) => {
  //       throw new Error(err.message);
  //     }));
  // }
}
