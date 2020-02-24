import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReservationRoomListPage } from '../reservation-room-list/reservation-room-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: string[] = [
    '커뮤니티1',
    '커뮤니티2',
    '커뮤니티3',
    '커뮤니티4',
    '서바이벌',
    '베이직',
    'BTS',
    '스탠다드',
    '카이젠',
    '임원회의실',
    'RTE',
    '교육장(출)',
    '교육장(휴)',
  ];

  constructor(public navCtrl: NavController) {

  }

  nextPage(data) {
    console.log("before : " + data);
    this.navCtrl.push(ReservationRoomListPage, {msg : data})
  }


}
