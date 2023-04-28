import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { hLink } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  hLink = hLink;

  ngOnInit(): void {
  const typed = new Typed('.typed-element', options);
  }

}

const options = {
  strings: ['Tech Enthusiast', 'Full Stack Dev', 'Problem Solver', 'Rohit Rana'],
  typeSpeed: 50,
  backSpeed: 70,
  showCursor: true,
  cursorChar: '|',
  cursor: 200,
};
