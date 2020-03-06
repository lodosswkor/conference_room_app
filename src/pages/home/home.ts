import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReservationRoomListPage } from '../reservation-room-list/reservation-room-list';
import { OpenApiServiceProvider } from '../../providers/open-api-service/open-api-service';
import { getSegmentsFromNavGroups } from 'ionic-angular/umd/navigation/url-serializer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // items = [
  //   { name: '커뮤니티룸1', isUsed: true },
  //   { name: '커뮤니티룸2', isUsed: false },
  //   { name: '커뮤니티룸3', isUsed: false },
  //   { name: '커뮤니티룸4', isUsed: false },
  //   { name: '서바이벌', isUsed: false },
  //   { name: '베이직', isUsed: false },
  //   { name: 'BTS', isUsed: false },
  //   { name: '스탠다드', isUsed: false },
  //   { name: '카이젠', isUsed: false },
  //   { name: '임원회의실', isUsed: false },
  //   { name: 'RTE', isUsed: false },
  //   { name: '교육장(출)', isUsed: false },
  //   { name: '교육장(휴)', isUsed: false }
  // ];

  item:any;
  service: any;

  constructor(public navCtrl: NavController, 
    public openApiServiceProvider: OpenApiServiceProvider,
    ) {

      this.service = openApiServiceProvider;
      this.service.getRooms();
  }

  setRooms(){

  }

  getReservation(){
    this.service.getReservation('2020-02-26');
  }

  setReservation(){
    this.service.setReservation();
  }

  post(){
    this.service.post();
  }

  get(){
    this.service.get();
  }

  test(){
    console.log("test")
  }

  nextPage(data) {
    this.navCtrl.push(ReservationRoomListPage, { msg: data })
  }

  // 토글 (true false)
  // FCM 구독
  togle(index) {
    // if(this.items[index].isUsed){
    //   this.items[index].isUsed=false;
    // }else {
    //   this.items[index].isUsed=true;
    // }

  }
}
