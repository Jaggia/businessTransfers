import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-why-hire-us',
  templateUrl: './why-hire-us.component.html',
  styleUrls: ['./why-hire-us.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class WhyHireUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
