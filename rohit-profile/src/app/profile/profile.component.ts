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
  age: number = 0;

  ngOnInit(): void {
    //this.age = new Date() - new Date()
    let timeDiff = Math.abs(Date.now() - new Date("1996-07-02").getTime());
    this.age  = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

}
