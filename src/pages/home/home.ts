import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	uvData: any;
	
	constructor(public navCtrl: NavController, public restProvider: RestProvider) {
		console.log('HomePage created');
		
		this.uvData = {};
		
		this.restProvider.getUV().then(data => {
			this.uvData = data.result;
		});
		
	}
}
