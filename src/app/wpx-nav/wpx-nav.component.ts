import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wpx-nav',
  templateUrl: './wpx-nav.component.html',
  styleUrls: ['./wpx-nav.component.css'],
})
export class WpxNavComponent implements OnInit {
  /**
   * Store the list of DropDown items
   * @type {Array.<object>}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() itemList: Array<object> = [];
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
  ngOnInit() {
    // console.log(this.itemList);
  }

  /**
   * Execute when DropDown Button is clicked
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @return {void}
   */
  navButtonClick() {
    // console.log(this);
  }

  /**
   * Check the ItemList is empty or not
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @return {boolean}
   */
  isItemListEmpty(): boolean {
    if (typeof this.itemList != 'undefined' && this.itemList.length != 0) {
      return false;
    }
    return true;
  }
}
