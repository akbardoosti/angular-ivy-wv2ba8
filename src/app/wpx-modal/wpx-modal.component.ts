import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
/**
 * @package YasinOsintDashboard
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @since 1.0.0
 */
@Component({
  selector: 'app-wpx-modal',
  templateUrl: './wpx-modal.component.html',
  styleUrls: ['./wpx-modal.component.css'],
})
/**
 * Designed for create modal in the page
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @since 1.0.0
 */
export class WpxModalComponent implements OnInit {
  MODAL_ID: any = uuidv4();
 
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

  closeModal() {
    const EL = document.getElementById(this.MODAL_ID);

    if (EL != null) {
      if (EL.style.display === 'none') {
        // ✅ Shows element if hidden
        EL.style.display = 'block';
      } else {
        // ✅ Hides element if shown
        EL.style.display = 'none';
      }
    }
  }
}
