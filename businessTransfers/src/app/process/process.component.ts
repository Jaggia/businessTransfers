import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ProcessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
