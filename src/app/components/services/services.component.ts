import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent
//  implements AfterViewInit
  {

  // isSwiping = false;

  constructor(
    // private router: Router
  ) { }

  //   //code for handling swipe gesture via HammerJs but commented as 
  // ngAfterViewInit(): void {
  //   const hammertime = new Hammer(document.documentElement);

  //   hammertime.on('panstart', (event) => {
  //     this.isSwiping = true; // Set flag on swipe start
  //   });

  //   hammertime.on('panend', (event) => {
  //     this.isSwiping = false; // Reset flag on swipe end
  //   });
  //   hammertime.on('swipeleft', (event) => {
  //     if (!this.isSwiping) {
  //       console.log('services +');
  //       event.preventDefault(); // Prevent default behavior of touch events
  //       this.router.navigateByUrl('/interview');
  //       this.isSwiping = true; // Set flag again after navigation
  //     }
  //   });
  //   hammertime.on('swiperight', () => {
  //     if (!this.isSwiping) {
  //       console.log('services -');
  //       this.router.navigateByUrl('/skills');
  //       this.isSwiping = true; // Set flag again after navigation
  //     }
  //   });
  // }

}
