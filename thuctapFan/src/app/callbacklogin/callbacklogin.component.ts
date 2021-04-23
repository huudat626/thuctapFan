
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";




@Component({
  selector: 'app-callbacklogin',
  templateUrl: 'callbacklogin.component.html'
})


export class CallBackLoginComponent implements OnInit{
  // code: string;
  // state: string;
  // error: string;
  constructor(private_route: ActivatedRoute,
    private router: Router){}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

    }

}
