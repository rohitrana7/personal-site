import { Component, OnInit } from '@angular/core';
import { hLink } from '../../constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }
  hLink = hLink;
  age: number = 0;

  ngOnInit(): void {
    this.calculateDynamicAge();
  }

  ngAfterViewInit(): void {
    //code for handling swipe gesture
    const hammertime = new Hammer(document.documentElement);
    hammertime.on('swipeleft', (event) => {
      event.preventDefault(); // Prevent default behavior of touch events
      this.router.navigateByUrl('/skills');
    });
    hammertime.on('swiperight', () => {
      this.router.navigateByUrl('/');
    });
  }
  
  calculateDynamicAge() {
    let timeDiff = Math.abs(Date.now() - new Date("1996-07-02").getTime());
    this.age  = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

}
