import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationRoomDetailPage } from '../reservation-room-detail/reservation-room-detail';

/**
 * Generated class for the ReservationRoomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation-room-list',
  templateUrl: 'reservation-room-list.html',
})
export class ReservationRoomListPage {

  label: any = '';

  // used for an example of ngFor and navigation
  private items = [
    {
      key : '0',
      time: '08:00 ~ 08:30',
      timeStartHour: '8',
      timeStartMin: '0',
      timeFinishHour: '8',
      timeFinishMin: '30',
      text: '주간미팅',
      person: '홍길동',
      onOff: 'on',
    }, {
      key : '1',
      time: '08:30 ~ 09:00',
      timeStartHour: '8',
      timeStartMin: '30',
      timeFinishHour: '9',
      timeFinishMin: '0',
      text: '주간미팅',
      person: '홍길동',
      onOff: 'on',
    }, {
      key : '2',
      time: '09:00 ~ 09:30',
      timeStartHour: '9',
      timeStartMin: '0',
      timeFinishHour: '9',
      timeFinishMin: '30',
      text: '주간미팅',
      person: '홍길동',
      onOff: 'on',
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.label = navParams.get('msg');
    console.log("after : " + this.label);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationRoomListPage');
  }

  // 데이터를 2개 넣어서 보내던가
  // JSON 아이템 자체를 넣어서
  nextPage(data) {
    console.log("before : " + data);
    this.navCtrl.push(ReservationRoomDetailPage, {msg : data})
  }

}
