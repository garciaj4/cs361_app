import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	uvData: Observable<any>;
	
	constructor(public navCtrl: NavController, public http: HttpClient) {
		let headers = new HttpHeaders();
		headers = headers.set('x-access-token', '9fd1e1d9bce5013471460beac181d183');
		this.uvData = this.http.get('https://api.openuv.io/api/v1/uv?lat=44.5&lng=-123.2', {headers});
		this.uvData
		.subscribe(data => {
			this.uvData = data.result; 
			console.log('my data: ', data);
		})
	}
}
