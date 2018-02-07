import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  companyName:string;
 companyWebsite:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.companyName = this.navParams.get('companyName');
  this.companyWebsite = this.navParams.get('companyWebsite');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
