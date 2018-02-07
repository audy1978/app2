import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from
'angularfire2/database';
@IonicPage()
@Component({
 selector: 'page-note',
 templateUrl: 'note.html'
})
export class NotePage {
 items: FirebaseListObservable<any[]>;
 key:string;
 topic:string;
 dueDate:string;
 isToogle:boolean = false;
 constructor(private af: AngularFireDatabase,
 public navCtrl: NavController,
 public navParams: NavParams) {}
 ionViewWillEnter() {
 this.showData();
 }
//แสดงขอมูลทั้งหมดจากฐานขอมูล
 showData() {
 this.items = this.af.list('https://ionicebook-fd8c4.firebaseio.com'); //ใส url ของผูอาน
 }
//เลือก item พรอมทั้งกําหนดคาใหกับ input ฟอรม และเก็บ key ไวดวยสําหรับการแกไข
 select(item) {
 //console.log(item);
 this.isToogle = true;
 this.topic = item.note.topic;
 this.dueDate = item.note.dueDate;
 this.key = item.$key;
}

//บันทึกขอมูล
 save
(note: any) {
 //console.log(blog);
 this
.items
.push({ note });
 this
.isToogle = false
;

}
//อัปเดตขอมูลตาม key ที่สงมา
 update
(note: any) {
 if
(this
.key) {
 this
.items
.update
(this
.key,
{note});
 this
.isToogle = false
;

}

}
 //ลบขอมูลแตละรายการตาม key ที่เลือก
 delete
(item
:any) {
 this
.items
.remove
(item
.$key);
 this
.isToogle = false
;

}
 /*deleteAll() { //ลบทั้งหมด
 this.items.remove();
 this.isToogle = false;
 }*/
 //เปน method ที่มีไวซอนหรือแสดงฟอรม
 openForm() {
 this
.isToogle = !this
.isToogle
;

}
}