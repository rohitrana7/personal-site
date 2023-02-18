import { Component, OnInit } from '@angular/core';
import { hLink } from '../constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  hLink = hLink;


  ngOnInit(): void {
  }

}
