import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navItem, profileName } from '../constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  profileTitle: string = profileName;
  navItem = navItem;
  navValue = navItem.home;  //by default pointing to home

  ngOnInit(): void {
  }

  loadMenu(navItem: number) {
    this.navValue = navItem;
  }

}
