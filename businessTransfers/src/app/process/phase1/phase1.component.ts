import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-phase1',
  templateUrl: './phase1.component.html',
  styleUrls: ['./phase1.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class Phase1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
