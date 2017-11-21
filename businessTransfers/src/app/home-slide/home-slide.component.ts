import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

 }
}
