import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

declare var google: any;
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ContactusComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 42.8085524
  lng: number = -71.31956

  constructor() { }

  ngOnInit() {

  }


}
