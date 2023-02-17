import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  gitHubLink = 'https://www.github.com/rohitrana7/';
  linkedInLink = 'https://www.linkedin.com/in/rohitrana7/';
  facebookLink = '#';
  twitterLink = 'https://twitter.com/ranarohit7/';
  instagramLink = 'https://www.instagram.com/thaekuaa/'

  ngOnInit(): void {
  }

}
