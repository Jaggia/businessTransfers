import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
