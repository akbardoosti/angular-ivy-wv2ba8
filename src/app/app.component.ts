import { Component, VERSION } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WpxTabComponent } from './wpx-tab/wpx-tab.component';
import { WpxModalComponent } from './wpx-modal/wpx-modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
