// app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
// app.component.ts
import { filter } from 'rxjs/operators';
// Add this line
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'user-ui-service';
  showCarousel = true;
  private routeSubscription: Subscription | undefined;

  constructor(private router: Router) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // app.component.ts
// app.component.ts

ngOnInit(): void {
  this.routeSubscription = this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      if (
        event.url === '/user/dashboard' ||
        event.url === '/user/register' ||
        event.url === '/user/login' ||    // added leading '/'
        event.url === '/user/profile'     // added leading '/'
      ) {
        // Hide the carousel for login, register, dashboard, and profile routes
        this.showCarousel = false;
      } else {
        // Show the carousel for other routes
        this.showCarousel = true;
      }
    });
}
  // ngOnDestroy(): void {
  //   // Clean up the subscription to avoid memory leaks
  //   this.routeSubscription.unsubscribe();
  // }
}