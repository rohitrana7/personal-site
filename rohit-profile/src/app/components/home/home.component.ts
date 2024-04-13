import { AfterViewInit, Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { hLink } from '../../constants/constants';
import * as Hammer from 'hammerjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  hLink = hLink;

  ngOnInit(): void {
  const typed = new Typed('.typed-element', options);
  }

  ngAfterViewInit(): void {
    //code for handling swipe gesture
    const hammertime = new Hammer(document.documentElement);
    hammertime.on('swipeleft', (event) => {
      event.preventDefault(); // Prevent default behavior of touch events
      this.router.navigateByUrl('/profile');
    });
    hammertime.on('swiperight', () => {
      this.router.navigateByUrl('/');
    });
  }
}

const options = {
  strings: ['Full Stack Dev.', 'Problem Solver', 'Rohit Rana'],
  typeSpeed: 50,
  backSpeed: 70,
  showCursor: false,
  cursor: 200,
};
