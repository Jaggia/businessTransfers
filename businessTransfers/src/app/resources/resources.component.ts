import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
