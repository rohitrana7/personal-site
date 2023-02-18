import { Component, OnInit } from '@angular/core';
import { hLink } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  hLink = hLink;

  ngOnInit(): void {
  }

}
