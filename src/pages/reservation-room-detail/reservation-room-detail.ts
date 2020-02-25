import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationRoomListPage } from '../reservation-room-list/reservation-room-list';
import { HomePage } from '../home/home';

/**
 * Generated class for the ReservationRoomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation-room-detail',
  templateUrl: 'reservation-room-detail.html',
})
export class ReservationRoomDetailPage {

  data:any='';

  private items = [
    {
      time: '30',
      timeText: '30분',
      onOff:'true'
    }, {
      time: '30',
      timeText: '30분',
      onOff:'true'
    }, {
      time: '30',
      timeText: '30분',
      onOff:'true'
    }, {
      time: '30',
      timeText: '30분',
      onOff:'true'
    }, {
      time: '30',
      timeText: '30분',
      onOff:'true'
    }
  ];

  // 날짜 선택으로 이동
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = navParams.get('msg');
    console.log('after : ' + this.data);

  }

  goBack() {
    console.log("clicked : goBack()")
    this.navCtrl.push(ReservationRoomListPage);
  }

  nextPage() {
    console.log("clicked : nextPage()")
    this.navCtrl.push(HomePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationRoomDetailPage');
  }

}
