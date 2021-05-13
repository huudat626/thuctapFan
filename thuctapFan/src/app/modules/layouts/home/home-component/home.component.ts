import { Component, OnInit } from '@angular/core';


// Models


// Services
import { NewReleasesService } from '../services/new-releases.service';
import { GlobalService } from 'src/app/services/global.service';
import { NewReleasesItem } from '../../models/new-releases-model';
import { Item } from '../../models/topplay';
import { FormatteUseTop } from '../../models/topplay';
import { isNgTemplate } from '@angular/compiler';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public newReleases: NewReleasesItem[] = [];
  public useTop: any[] = [];
  public moreAlbums: boolean = false;
  public moreTracks: boolean = false;
  // useTopArr: any[]=[];

  constructor(
    private newReleasesService: NewReleasesService,
    private globalService: GlobalService,

  ) { /*empty*/ }

  ngOnInit(): void {

    this.getNewReleases();
    this.getUserTop();
  }

  // call service to get new releases from spotify
  public getNewReleases(): void {
    this.newReleasesService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      //console.log('Data:', data);
    }, (err) => {
      //console.log('Error:', err);
      //console.error(err.message);
    }, () => {
     // console.log('Complete!');
    });
  }
  public getUserTop(): void {
    this.newReleasesService.getUserTop().subscribe((data: any) => {
      this.useTop = data.items;
      let arr: [] = data.items;
      let arrNew = arr.filter(function (item: any, index) {
        return arr.filter((val, i) => {
          return (val as any).track.id === item.track.id && index !== i && i > index;

        }).length === 0;
      })
      this.useTop = arrNew;
     // console.log('arrRe', this.useTop);
    })


  }

  // update variable to see more/less albums
  public seeMoreAlbums(): void {
    this.moreAlbums = !this.moreAlbums;
  }

  // update variable to see more/less tracks
  public seeMoreTracks(): void {
    this.moreTracks = !this.moreTracks;
}
}
