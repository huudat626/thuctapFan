import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { Location } from '@angular/common';
import { GlobalService } from 'src/app/services/global.service';
import { BehaviorSubject, from, Subscription } from 'rxjs';
import { PlaySpotifyService } from 'src/app/services/play-spotify';
import { PlaylistsService } from 'src/app/modules/layouts/playlists/service/playlists.service';
import { APIPlaylist, Item } from 'src/app/modules/layouts/models/playlist';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/spotify-auth/service/auth.service';
import { TokenService } from 'src/app/spotify-auth/service/token.service';
import { SearchTrackQuery } from 'src/app/states/state/search-track.query';
import { ProFilesSvice } from 'src/app/profile.service';
import { AuthConfig } from 'src/app/spotify-auth/service/auth-config.i';
import { ScopesBuilder } from 'src/app/spotify-auth/service/scopes-builder';
import { UserProfile } from 'src/app/modules/layouts/models/userprofile';
import { SearchTrackService } from 'src/app/states/state/search-track.service';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { Creatplaylist } from 'src/app/modules/layouts/models/creatplaylist';
import { filter } from 'rxjs/operators';




export interface EditNamePlayList extends APIPlaylist {
  href: string;
  items: ItemEdittingPlayplist[];
  limit: number;
  next?: any;
  offset: number;
  previous: string;
  total: number;
  uri: string;
}
export interface ItemEdittingPlayplist extends Item{
  isEditting: boolean;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
 // public playList!: any;
  public playListId: string = '';
  private valueFromChildSubscription!: Subscription;
  ifamsrc!: string;
  user$ = new BehaviorSubject(null);
  user!: UserProfile[];
  profile: any;
  dataPlaylist!: EditNamePlayList ;
  nameModel!: string;
  userId!: string;
  private _input!: ElementRef;



  constructor(
    private playSpotify: PlaySpotifyService,
    private playlistsService: PlaylistsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService,
    private route: Router,
    private profilesevice: ProFilesSvice,
    private servicestae: SearchTrackService,
    private searSongQuery: SearchTrackQuery,
    private location: Location,
    private nzContextMenuService: NzContextMenuService,


  ) { }

@ViewChild('myInput',{static:false})set content(content:ElementRef){
  if (content){
    this._input= content;
    this._input.nativeElement.focus();
  }
}
  ngOnInit(): void { /*empty*/

    if (!!this.tokenService.oAuthToken) {
      this.authService.authorized();
    }
    // this.getprofile();

    this.authService.authorizedStream.subscribe((res) => {
      console.log(res);


      if (res) {
        setTimeout(()=>{
          this.getPlaylist();
          this.displayUser();

        },500)


      }

      else {
        this.user$.next(null);
      }
    });
    this.searSongQuery.checkResultCreate$.subscribe((res) => {
      if (res) {
        this.getPlaylist();
      }
    });
    this.userProfile();
    this.Playtrack();
    // this.getPlaylist();
    //this.getActivatedRoute();
  }


  login() {

    // window.location.href="https://accounts.spotify.com/authorize?client_id=32da9e39aa4443e69d349930645c1b8e&response_type=code&redirect_uri="+encodeURIComponent("http://localhost:4200/callback-login/")+"&scope=user-read-private%20user-read-email&state=34fFs29kd09"
    const scopes = new ScopesBuilder().build();
    const ac: AuthConfig = {
      client_id: 'c5e567838382421c8f04af965f70ab24',
      response_type: "token",
      redirect_uri: encodeURIComponent('http://localhost:4200/authorized/'),
      state: "",
      show_dialog: true,
      scope: scopes

    }
    this.authService.configure(ac).authorize();
  }


  logout(): void {
    this.tokenService.clearToken();
    this.authService.unAuthorzed();
    // this.route.navigate['/playlist'];
  }

  public getprofile(): void {
    this.profilesevice.getuserProfile().subscribe((data: UserProfile) => {
      this.profile = data;
      // console.log('profile', this.profile);
    }, (err) => {
      //  console.log('Error:', err);
      console.error(err.message);
    }, () => {
      //console.log('Complete!');
    });
  }


  // update variable which controls side bar visibility

  public getPlaylist(): void {
    this.playlistsService.getPlaylistSong(this.playListId).subscribe((data: any) => {
      this.dataPlaylist = data;
       console.log('list', this.dataPlaylist);
    }, (err) => {
      // console.log('Error:', err);
      console.error(err.message);
    }, () => {
      //console.log('Complete!');
    });
  }
  userProfile() {
    this.profilesevice.getuserProfile().subscribe((data: UserProfile) => {
      localStorage.setItem('user', JSON.stringify(data));

    });

  }
  displayUser() {
    let userString: any = localStorage.getItem('user');
    let userParse = JSON.parse(userString);
    console.log('user', userParse);
    if(userParse){
      this.userId=userParse.id;
      this.user$.next(userParse);
    }

  }


  renamePlayList(playlistId: string, i: any) {
    const filters = this.dataPlaylist.items.filter((e) => e.id ==playlistId)[0];
    const model: Creatplaylist = {
      name: this.nameModel,
      description: 'Dat',
      public: filters?.public,

    };
    this.playlistsService.updateplaylist(playlistId, model).subscribe({
      next: (dataPlaylistNew) => {
        this.dataPlaylist.items[i].name = this.nameModel;

      },
      complete: () => {
        const temp = { ...this.dataPlaylist };
        temp.items[i].isEditting = false;
        this.dataPlaylist = { ...temp }
      },
    })
  }

  showInput(playListId: string, i: any) {
    console.log('i',playListId);

    this.dataPlaylist = {
      ...this.dataPlaylist,
      items: this.dataPlaylist.items.map((item) => {
        return { ...item, isEditting: false };
      }),
    };
    const fill = this.dataPlaylist.items.filter((e) => e.id == playListId)[0];
    const model: Creatplaylist = {
      name: (this.nameModel = fill?.name),
      description: fill?.description,
      public: fill?.public,
    };
    const temp = { ...this.dataPlaylist };
    temp.items[i].isEditting = true;
    this.dataPlaylist = { ...temp }
  }

  public Playtrack() {
    this.valueFromChildSubscription = this.playSpotify.playtrackId.subscribe(
      data => {
        console.log("urltrack", data);
        this.ifamsrc = data;
        console.log('url', this.ifamsrc);

      })
  }
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  closeMenu(): void {
    this.nzContextMenuService.close();
  }


  public ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.valueFromChildSubscription.unsubscribe();

  }


  goBack() {
    this.location.back();
  }

}



