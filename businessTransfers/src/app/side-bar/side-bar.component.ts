import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  collapseMe() {
    if ($('ul').hasClass('in') && ($('ul').attr('id') !== 'about' || $('ul').attr('id') !== 'about')) {
      $('ul').removeClass('in');
    }
  }

}
