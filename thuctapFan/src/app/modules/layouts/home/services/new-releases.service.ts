import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models
import { FormattedNewReleases, APINewReleases } from '../models/new-releases-model';

// Services
import { GlobalService } from 'src/app/services/global.service';
import { AlbumComponent } from '../../album/album-component/album.component';

@Injectable() // service provided in module
export class NewReleasesService {
  private newReleasesUrl: string = 'browse/new-releases';

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
}