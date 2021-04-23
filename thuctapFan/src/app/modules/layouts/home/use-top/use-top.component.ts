import { Component, Input, OnInit } from '@angular/core';
import { NewReleasesService } from '../services/new-releases.service';

@Component({
  selector: 'app-use-top',
  templateUrl: './use-top.component.html',
  styleUrls: ['./use-top.component.less']
})
export class UseTopComponent implements OnInit {

  @Input()
  useTop!: any;
  constructor(
    private useTopService: NewReleasesService,
  ) { }

  ngOnInit(): void {
  }
  // public getUserTop(): void {
  //   this.useTopService.getUserTop().subscribe((data: any) => {
  //     this.useTop = data;

  //     console.log('Data:', data);
  //   }, (err) => {
  //     console.log('Error:', err);
  //     console.error(err.message);
  //   }, () => {
  //     console.log('Complete!');
  //   });
  // }
  public navigate(useTop: any): void {
    let useTopId: number = 0;

    useTop.type === 'track' ?  useTopId = useTop.id : useTopId = useTop.id;
    console.log('new release type:', useTop.type);
    console.log('New Release Id:', useTopId);

}
}
