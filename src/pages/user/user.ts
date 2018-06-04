import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

	users: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController) {
		console.log('UserPage created');
	}

	ionViewDidEnter() {
		this.restProvider.getUser().then(data => {
			this.users = data;
		});
		console.log('ionViewDidEnter UserPage');
	}

	deleteUser(user){
		
		this.restProvider.deleteUser(user.id).then((result) => {
			
			const toast = this.toastCtrl.create({
				message: 'User deleted!',
				duration: 2000
			});
			toast.present();
			
			//this needs to redirect to a login page
			this.restProvider.getUser().then(data => {
				this.reminders = data;
			});
			
		}, (err) => {
			console.log(err);

		});	
	}

}
