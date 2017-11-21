import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-phase2',
  templateUrl: './phase2.component.html',
  styleUrls: ['./phase2.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class Phase2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
