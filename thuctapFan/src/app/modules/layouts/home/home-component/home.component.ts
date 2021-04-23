import { Component, OnInit } from '@angular/core';


// Models


// Services
import { NewReleasesService } from '../services/new-releases.service';
import { GlobalService } from 'src/app/services/global.service';
import { NewReleasesItem } from '../../models/new-releases-model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public newReleases: NewReleasesItem[] = [];
  public useTop: any[]=[];

  constructor(
    private newReleasesService: NewReleasesService,
    private globalService: GlobalService,

    ){ /*empty*/ }

  ngOnInit(): void {

    this.getNewReleases();
    this.getUserTop();
  }

  // call service to get new releases from spotify
  public getNewReleases(): void {
    this.newReleasesService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      console.log('Data:', data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }
  public getUserTop(): void {
    this.newReleasesService.getUserTop().subscribe((data: any) => {
      this.useTop = data;
      console.log('Data top:', data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }


}
