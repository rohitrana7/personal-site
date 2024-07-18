import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { profileName } from '../../constants/constants'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {

  constructor(private router: Router) { }

  profileTitle: string = profileName;

  @Input() currentUrl: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    let url:string = changes['currentUrl'].currentValue;
    this.currentUrl = url.substring(1);
  }
}
