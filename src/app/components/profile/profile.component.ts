import { Component, OnInit } from '@angular/core';
import { hLink } from '../../constants/constants';
import { SharedModule } from '../../_modules/shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  hLink = hLink;
  age: number = 0;
  userEmail:string = "rohit.rana0207@gmail.com";

  ngOnInit(): void {
    this.calculateDynamicAge();
  }
  
  calculateDynamicAge() {
    let timeDiff = Math.abs(Date.now() - new Date("1996-07-02").getTime());
    this.age  = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

}
