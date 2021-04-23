import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class PlaySpotifyService {
  private trackId: Subject<string>= new Subject();
  public get playtrackId() {
    return this.trackId;
}

public notifyPlayTrackId(uri: string) {
    this.trackId.next(uri);
}
}
