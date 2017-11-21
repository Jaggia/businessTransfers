import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-in-the-news',
  templateUrl: './in-the-news.component.html',
  styleUrls: ['./in-the-news.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class InTheNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
