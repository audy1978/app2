
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { NotePage } from '../pages/note/note';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const config = {

    apiKey: "AIzaSyCt1EQ4DD6ui-9wM5j2dGtiqZcSP3c7RlA",
    authDomain: "ionicebook-fd8c4.firebaseapp.com",
    databaseURL: "https://ionicebook-fd8c4.firebaseio.com",
    projectId: "ionicebook-fd8c4",
    storageBucket: "ionicebook-fd8c4.appspot.com",
    messagingSenderId: "837217879658"

};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    AboutPage,ContactPage,NotePage
  ],
  imports: [
 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    AboutPage,ContactPage,NotePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
