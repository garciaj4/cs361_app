import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AddReminderPage } from '../add-reminder/add-reminder';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-reminders',
	templateUrl: 'reminders.html',
})
export class RemindersPage {

	reminders: any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController) {
		console.log('RemindersPage created');
	}

	ionViewDidEnter() {
		this.restProvider.getReminders().then(data => {
			this.reminders = data;
		});
		console.log('ionViewDidEnter RemindersPage');
	}	
	
	addReminder() {
		this.navCtrl.push(AddReminderPage);	
	}
	
	deleteReminder(reminder){
		
		this.restProvider.deleteReminder(reminder.r_id).then((result) => {
			
			console.log(result);
			
			const toast = this.toastCtrl.create({
				message: 'Reminder deleted!',
				duration: 2000
			});
			toast.present();
			
			this.restProvider.getReminders().then(data => {
				this.reminders = data;
			});
			
		}, (err) => {
			console.log(err);

		});	
	}
	

}
