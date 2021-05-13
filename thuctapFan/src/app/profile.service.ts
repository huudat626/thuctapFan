import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserProfile } from "./modules/layouts/models/userprofile";
import { GlobalService } from "./services/global.service";

@Injectable({
  providedIn: 'root'
})
export class ProFilesSvice {

  constructor(private globalService: GlobalService , private route : ActivatedRoute,
    private _http: HttpClient) { /*empty*/ }
    public getuserProfile(): Observable<UserProfile> {
      const profiletUrl: string = `me`;

      return this.globalService.getQuery(profiletUrl).pipe(
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
  }
