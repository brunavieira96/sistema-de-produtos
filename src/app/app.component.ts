import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-de-produtos';

  constructor (public  router : Router, activatedroute : ActivatedRoute) {

  }


public teste() {

  this.router.navigate
}

}






