import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    //code for handling swipe gesture
    const hammertime = new Hammer(document.documentElement);
    hammertime.on('swipeleft', (event) => {
      event.preventDefault(); // Prevent default behavior of touch events
      this.router.navigateByUrl('/interview');
    });
    hammertime.on('swiperight', () => {
      this.router.navigateByUrl('/skills');
    });
  }

}
