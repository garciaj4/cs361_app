import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
	selector: 'page-log',
	templateUrl: 'log.html',
})
export class LogPage {

	log: any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
		console.log('LogPage created');
	}
	
	ionViewDidEnter() {
		this.restProvider.getLog().then(data => {
			console.log(data);
			this.log = data;
		});
		console.log('ionViewDidEnter LogPage');
	}
}
