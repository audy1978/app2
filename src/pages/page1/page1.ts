import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '10:24',
    timeEnds: '1990-02-20'
  }

}
