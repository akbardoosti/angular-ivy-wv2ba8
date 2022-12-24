import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wpx-input',
  templateUrl: './wpx-input.component.html',
  styleUrls: ['./wpx-input.component.css'],
})
export class WpxInputComponent implements OnInit {
  @Input() cType: any = 'text';
  @Input() cId: any = 'text';
  @Input() cClass: any = 'text';

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
}
