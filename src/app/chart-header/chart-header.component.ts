import { Component, OnInit, Input } from '@angular/core';

import { WpxFormComponent } from './../wpx-form/wpx-form.component';
import { WpxNavComponent } from './../wpx-nav/wpx-nav.component';
import { WpxInputComponent } from './../wpx-input/wpx-input.component';

@Component({
  selector: 'app-chart-header',
  templateUrl: './chart-header.component.html',
  styleUrls: ['./chart-header.component.css'],
})
export class ChartHeaderComponent implements OnInit {
  @Input() soptions: Array<object>;
  @Input() chartLabel: any;
  @Input() siteList: Array<number> = [1, 2, 3];
  @Input() isHeaderTab: any;
  @Input() navItemList: Array<object> = [
    {
      name: 'divar',
      fa_name: 'دیوار',
      img_src: 'https://www.svgrepo.com/show/329583/divar.svg',
    },
    {
      name: 'sheypoor',
      fa_name: 'شیپور',
      img_src: 'https://cdn.worldvectorlogo.com/logos/sheypoor.svg',
    },
    {
      name: 'bama',
      fa_name: 'باما',
      img_src: 'hhttps://cdn.bama.ir/assets/favicon/favicon.svg?v=1005',
    },
  ];
  constructor() {}
/**
   * Initialize the class when an instance of the class is created
   * @contstructor
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */

 /**
  * Execute when angular is loading
  * @author  Akbar Doosti<wpx93.ir@gmail.com>
  * @return {void}
  */
  ngOnInit() {}

  isSiteListEmpty(): boolean {
    if (typeof this.siteList != 'undefined' && this.siteList.length != 0) {
      return false;
    }
    return true;
  }

  isOptionsEmpty(): boolean {
    if (typeof this.soptions != 'undefined' && this.soptions.length != 0) {
      return false;
    }
    return true;
  }
  isNavItemListEmpty(): boolean {
    if (
      typeof this.navItemList != 'undefined' &&
      this.navItemList.length != 0
    ) {
      return false;
    }
    return true;
  }
}
