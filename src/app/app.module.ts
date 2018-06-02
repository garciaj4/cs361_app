import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Home and Nav
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Data Provider
import { RestProvider } from '../providers/rest/rest';

// User
import { UserPage } from '../pages/user/user';

// Settings
import { SettingsPage } from '../pages/settings/settings';

// Log
import { LogPage } from '../pages/log/log';

// Reminder
import { RemindersPage } from '../pages/reminders/reminders';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
	RemindersPage,
	AddReminderPage,
	LogPage,
	UserPage,
	SettingsPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
	RemindersPage,
	AddReminderPage,
	LogPage,
	UserPage,
	SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
