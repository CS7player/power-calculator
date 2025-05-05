import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
@Component({
 selector: 'app-header',
 imports: [MatButtonModule, RouterModule],
 templateUrl: './header.component.html',
 styleUrls: []
})
export class HeaderComponent implements OnInit {

 private readonly route = inject(Router);
 activeIndex: number = 0;
 titleData: any = [
  { title: "Calculator", route: "/calculator", icon: "fa-calculator" },
  { title: "Age", route: "/age", icon: "fa-baby-carriage" },
  { title: "Area", route: "/area", icon: "fa-chart-area" },
  { title: "Bmi", route: "/bmi", icon: "fa-weight-scale" },
  { title: "Data", route: "/data", icon: "fa-arrow-right-arrow-left" },
  { title: "Discount", route: "/discount", icon: "fa-tag" },
  { title: "Length", route: "/length", icon: "fa-ruler-vertical" },
  { title: "Mass", route: "/mass", icon: "fa-weight-hanging" },
  { title: "Numeral System", route: "/numeral-system", icon: "fa-arrow-up-9-1" },
  { title: "Speed", route: "/speed", icon: "fa-gauge-high" },
  { title: "Temperature", route: "/temperature", icon: "fa-temperature-low" },
  { title: "Time", route: "/time", icon: "fa-stopwatch" },
  { title: "Volume", route: "/volume", icon: "fa-cube" },
  { title: "Gst", route: "/gst", icon: "fa-chart-line" },
  { title: "Currency", route: "/currency", icon: "fa-money-bill-transfer" },
  { title: "Investment", route: "/investment", icon: "fa-hand-holding-dollar" },
  { title: "Loan", route: "/loan", icon: "fa-comments-dollar" }
 ];

 ngOnInit(): void {
  this.route.navigate(['calculator']);
 }

}
