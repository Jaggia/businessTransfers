import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-who-we-serve',
  templateUrl: './who-we-serve.component.html',
  styleUrls: ['./who-we-serve.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class WhoWeServeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
