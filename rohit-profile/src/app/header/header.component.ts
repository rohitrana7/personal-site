import { Component, OnInit } from '@angular/core';
import { navItem, profileName } from '../constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor() { }

  profileTitle: string = profileName;
  navItem = navItem;
  navValue = navItem.home; //by default pointing to home

  loadMenu(navItem: number) {
    this.navValue = navItem;
  }
}
