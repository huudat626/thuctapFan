import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewReleasesItem } from '../../models/new-releases-model';


// Models


@Component({
  selector: 'app-new-release-item',
  templateUrl: './new-release-item.component.html',
  styleUrls: ['./new-release-item.component.scss']
})
export class NewReleaseItemComponent implements OnInit {
  @Input()
  newRelease!: NewReleasesItem;

  constructor(private router: Router) { /*empty*/ }

  ngOnInit(): void {
    console.log('1s',this.newRelease);
     /*empty*/ }

  public navigate(newRelease: any): void {
    let newReleaseId: number = 0;

    newRelease.type === 'artist' ?  newReleaseId = newRelease.id : newReleaseId = newRelease.id;
    console.log('new release type:', newRelease.type);
    console.log('New Release Id:', newReleaseId);

    // this.router.navigate(['/artist', newReleaseId]);
    this.router.navigate(['/album', newReleaseId]);
  }
}
