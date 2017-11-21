import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'router.animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
