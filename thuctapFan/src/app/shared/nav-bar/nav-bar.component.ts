import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { GlobalService } from 'src/app/services/global.service';
import { Subscription } from 'rxjs';
import { PlaySpotifyService } from 'src/app/services/play-spotify';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private valueFromChildSubscription!: Subscription;
   ifamsrc!:string;

constructor(
  private playSpotify: PlaySpotifyService,
){}


  ngOnInit(): void { /*empty*/

    this.Playtrack()

  }

  // update variable which controls side bar visibility


  public Playtrack(){
 this.valueFromChildSubscription=this.playSpotify.playtrackId.subscribe(
   data=>{
     console.log("urltrack",data);
     this.ifamsrc=data;
     console.log('url',this.ifamsrc);

   } )
}
public ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.valueFromChildSubscription.unsubscribe();
}
}



