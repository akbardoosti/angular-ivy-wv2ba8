import { Component, OnInit } from '@angular/core';
import { CartContainerComponent } from './../cart-container/cart-container.component';
import { ChartRowComponent } from './../chart-row/chart-row.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
/**
 * Main component in dashboard sh
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @class DashboardComponent
 */
export class DashboardComponent implements OnInit {
  /**
   * Initialize the class when an instance of the class is created
   * @contstructor
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */
  constructor() {}

  /**
   * Execute when angular is loading
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @return {void}
   */
  ngOnInit() {}
}
