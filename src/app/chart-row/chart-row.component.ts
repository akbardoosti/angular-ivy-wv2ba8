import { Component, OnInit, Input } from '@angular/core';
import { ChartContainerComponent } from './../chart-container/chart-container.component';

@Component({
  selector: 'app-chart-row',
  templateUrl: './chart-row.component.html',
  styleUrls: ['./chart-row.component.css'],
})
/**
 * Container of serveral ChartComponents in one row.
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @class ChartContainerComponent
 */
export class ChartRowComponent implements OnInit {
  /**
   * Store chart list to show statistics in the Dashboard
   * @type {Array.<any>}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() chartList: any = [
    {
      options: {
        col_size: 8,
      },
      label: 'نمودار توزیع مطالب',
    },
    {
      options: {
        col_size: 4,
      },
      label: 'برترین هشتگ ها',
    },
  ];

  /**
   * Initialize the class when an instance of the class is created
   * @contstructor
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */
  constructor() {}
  /**
   * Execute when angular is loading
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */
  ngOnInit() {}
}
