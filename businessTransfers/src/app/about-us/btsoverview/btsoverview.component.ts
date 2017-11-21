import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-btsoverview',
  templateUrl: './btsoverview.component.html',
  styleUrls: ['./btsoverview.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BTSOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
