import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReservationRoomListPage } from '../reservation-room-list/reservation-room-list';
import { OpenApiServiceProvider } from '../../providers/open-api-service/open-api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    { room: '커뮤니티룸1', status: true },
    { room: '커뮤니티룸2', status: false },
    { room: '커뮤니티룸3', status: false },
    { room: '커뮤니티룸4', status: false },
    { room: '서바이벌', status: false },
    { room: '베이직', status: false },
    { room: 'BTS', status: false },
    { room: '스탠다드', status: false },
    { room: '카이젠', status: false },
    { room: '임원회의실', status: false },
    { room: 'RTE', status: false },
    { room: '교육장(출)', status: false },
    { room: '교육장(휴)', status: false }
  ];

  item:any;
  service: any;

  constructor(public navCtrl: NavController, 
    public openApiServiceProvider: OpenApiServiceProvider,
    ) {

      this.service = openApiServiceProvider;

  }

  test(){
    console.log("test")
  }

  nextPage(data) {
    this.navCtrl.push(ReservationRoomListPage, { msg: data })
  }

  // 토글 (true false)
  togle(index) {
    if(this.items[index].status){
      this.items[index].status=false;
    }else {
      this.items[index].status=true;
    }

  }
}
