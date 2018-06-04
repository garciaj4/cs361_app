import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

	// UV API Info...
	UVapiUrl = 'https://api.openuv.io/api/v1/uv?lat=44.5&lng=-123.2';
	UVapiKey = '9fd1e1d9bce5013471460beac181d183';
	
	constructor(public http: HttpClient) {
		console.log('RestProvider created');
	}
	
	// Display Reminders
	getReminders() {
		return new Promise(resolve => {
			this.http.get('http://flip3.engr.oregonstate.edu:7730/reminders').subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}
	
	// Add Reminder
	addReminder(data) {
		
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json');
		
		return new Promise((resolve, reject) => {
			this.http.post('http://flip3.engr.oregonstate.edu:7730/reminders', data, {headers}).subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
				console.log(err);
			});
		});
	}
	
	// Delete Reminder
	deleteReminder(id) {

		return new Promise(resolve => {
			this.http.delete('http://flip3.engr.oregonstate.edu:7730/reminders/' + id).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}
	
	// Display Log
	getLog() {
		
		console.log("Get log request received..");
		
		return new Promise(resolve => {
			this.http.get('http://flip3.engr.oregonstate.edu:7730/log').subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}
	
	// Add Log Entry
	addLogEntry(data) {
		
		console.log("CLIENT SENT: " + data);
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json');
		
		return new Promise((resolve, reject) => {
			this.http.post('http://flip3.engr.oregonstate.edu:7730/log', data, {headers}).subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
				console.log(err);
			});
		});
	}
	
	getUV(){

		let headers = new HttpHeaders();
		headers = headers.set('x-access-token', '9fd1e1d9bce5013471460beac181d183');
		
		return new Promise(resolve => {
			this.http.get(this.UVapiUrl, {headers}).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}

	createUser(){
	
	}

	login(){

	}

	//this should accept an id and probably a jwt token to get user data
	//currently hardcoded for user 1
	getUser(){
		return new Promise(resolve => {
			this.http.get('http://flip3.engr.oregonstate.edu:7730/user?id=1').subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}

	deleteUser(id) {

		return new Promise(resolve => {
			this.http.delete('http://flip3.engr.oregonstate.edu:7730/user/' + id).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}
}
