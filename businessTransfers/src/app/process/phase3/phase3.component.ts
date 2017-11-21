import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-phase3',
  templateUrl: './phase3.component.html',
  styleUrls: ['./phase3.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class Phase3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
