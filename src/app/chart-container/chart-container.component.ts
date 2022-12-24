import { Component, OnInit, Input } from '@angular/core';
import { ChartHeaderComponent } from './../chart-header/chart-header.component';
import { ChartBodyComponent } from './../chart-body/chart-body.component';
import { ChartFooterComponent } from './../chart-footer/chart-footer.component';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css'],
})
/**
 * ChartContianerComponent shows comparison statistics in dashboard
 * between multiple items.
 *
 * This component integrates several component( which include ChartHeader
 * and ChartBody and ChartFooter Components ) in one component
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @class ChartComponent
 */
export class ChartContainerComponent implements OnInit {
  /**
   * Store cart label in any language to show the user
   * @type {any}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() chartLabel: any;

  /**
   * It shows whether the header is tabbed or normal text
   * @type {boolean}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() isHeaderTab: boolean = true;
  /**
   * It takes the optional fields from the parent component and applies
   * them to the HTML part.
   * @type {Array.<object>}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() headerOptions: Array<object>;
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
