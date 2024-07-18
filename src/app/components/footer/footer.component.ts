import { Component, Input, OnInit } from '@angular/core';
import { hLink } from '../../constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }

  hLink = hLink;

  @Input() isCopyrightContent: boolean = true;

}
