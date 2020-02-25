import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationRoomDetailPage } from '../reservation-room-detail/reservation-room-detail';
import { FavPage } from '../fav/fav';
import { stringify } from '@angular/core/src/util';

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

  // 화면의 타이틀
  label: string = '';
  date: string = '2020-02-25'

  label_3: string = '예약자 '

  // used for an example of ngFor and navigation
  private items = [
    {
      text: '08:00 ~ 08:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '08:30 ~ 09:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '09:00 ~ 09:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '09:30 ~ 10:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '10:00 ~ 10:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '10:30 ~ 11:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '11:00 ~ 11:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '11:30 ~ 12:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '12:00 ~ 12:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '12:30 ~ 13:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '13:00 ~ 13:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '13:30 ~ 14:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '14:00 ~ 14:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '14:30 ~ 15:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    }, {
      text: '15:00 ~ 15:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    },{
      text: '15:30 ~ 16:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    },{
      text: '16:00 ~ 16:30',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    },{
      text: '16:30 ~ 17:00',
      note: 'test',
      person: 'test',
      status: 'on',
      timeStartHour: '1',
      timeStartMin: '2',
      timeFinishHour: '3',
      timeFinishMin: '4',
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.label = navParams.get('msg');
    console.log("after : " + this.label);

    var hour = 8;
    var min = 0;

    // 반복문 진행
    // for (var i = 0; i < 18; i++) {

    //   // 짝수 
    //   if (i % 2 == 0) {
    //     min = 0;
    //     this.items.push({
    //       text: '08:00 ~ 08:30',
    //       note: '',
    //       person: '',
    //       status: 'on',
    //       timeStartHour: stringify(hour),
    //       timeStartMin: stringify(min),
    //       timeFinishHour: stringify(hour + 1),
    //       timeFinishMin: stringify(min + 30),
    //     })
    //   }
    //   // 홀수
    //   else {
    //     min = 30;

    //     this.items.push({
    //       text: '08:00 ~ 08:30',
    //       note: '',
    //       person: '',
    //       status: 'on',
    //       timeStartHour: stringify(hour),
    //       timeStartMin: stringify(min),
    //       timeFinishHour: stringify(hour + 1),
    //       timeFinishMin: stringify(min + 30),
    //     })
    //     hour = hour + 1;
    //   }
    // }




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationRoomListPage');
  }

  // 데이터를 2개 넣어서 보내던가
  // JSON 아이템 자체를 넣어서
  nextPage(data) {
    console.log("before : " + data);
    this.navCtrl.push(ReservationRoomDetailPage, { msg: data })
  }

  nextPageDatePick() {
    console.log("clicked : nextPageDatePick()");

    // 클릭한 날짜 정보 전달
    this.navCtrl.push(FavPage);
  }


}
