import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { hLink } from '../../constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hLink = hLink;
  constructor() { }

  ngOnInit(): void {
  const typed = new Typed('.typed-element', options);
  }

}

const options = {
  strings: ['Full Stack Dev.', 'Problem Solver', 'Rohit Rana'],
  typeSpeed: 50,
  backSpeed: 70,
  showCursor: false,
  cursor: 200,
};
