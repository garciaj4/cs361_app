import { Component } from '@angular/core';

import { RemindersPage } from '../reminders/reminders';
import { LogPage } from '../log/log';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RemindersPage;
  tab3Root = LogPage;

  constructor() {

  }
}
