import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-add-reminder',
	templateUrl: 'add-reminder.html',
})

export class AddReminderPage {

	reminder = { r_name:'', r_description:'', r_time:''};
	logEntry = {};
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController) {
		console.log('AddReminderPage created');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddReminderPage');
	}
  	
	logReminder(){
		
		this.logEntry = 'Reminder added!';
		this.restProvider.addLogEntry(this.logEntry).then((result) => {
			console.log(result);
		}, (err) => {
			console.log(err);
		});
	}
	
	addReminder() {
		this.restProvider.addReminder(this.reminder).then((result) => {
			
			const toast = this.toastCtrl.create({
				message: 'Reminder added!',
				duration: 2000
			});
			toast.present();
			
		}, (err) => {
			console.log(err);
		});
		this.navCtrl.pop();
	}
}