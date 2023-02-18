import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  const typed = new Typed('.typed-element', options);
  }

}

const options = {
  strings: ['Tech Enthusiast', 'Full Stack Dev', 'Problem Solver', 'Rohit Rana'],
  typeSpeed: 100,
  backSpeed: 100,
  showCursor: true,
  cursorChar: '|',
  cursor: 200,
};
