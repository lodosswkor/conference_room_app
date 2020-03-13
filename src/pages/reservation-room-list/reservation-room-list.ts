import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReservationRoomDetailPage } from '../reservation-room-detail/reservation-room-detail';
import { FavPage } from '../fav/fav';
import { stringify } from '@angular/core/src/util';
import { OpenApiServiceProvider } from '../../providers/open-api-service/open-api-service';

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
  roomName: string = '';
  roomId: number = 0;

  // 오늘 날짜
  // EX : 2020-02-25 ( YYYY-MM-DD )
  date: string = '2020-02-25'

  service: any;

  // used for an example of ngFor and navigation
  // id, title, date, userName, roomeName, startTime, endTime, token

  constructor(public alertCtrl : AlertController, public openApiServiceProvider: OpenApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    // 생성자
    // 라벨 명 받기(라벨명 = roomName)
    this.roomName = navParams.get('roomName');
    this.roomId = navParams.get('roomId');

    console.log("after : " + this.roomName);
    this.service = openApiServiceProvider;

    // 날짜 최신화
    // (YYYY-MM-DD)
    var today = new Date();
    var year = (today.getFullYear()).toString();
    var month = (today.getMonth() + 1).toString();
    var day = (today.getDate()).toString();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    var strToday = [year, month, day].join('-');

    this.date = strToday;
    console.log(strToday);
    console.log(this.date);

    // 날짜 공유
    this.service.date = this.date;
    this.service.getReservation(this.date, this.roomName);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationRoomListPage');
  }

  presentAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['확인']
    });
    alert.present();
  }

  deleteAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['예','아니오']
    });
    alert.present();
  }

  pressed(){
    console.log("pressed");
  }
  active(){
    console.log("active");
  }
  released(){
    console.log("released");
    this.deleteAlert("예약을 제거할까요?", "예");
  }

  // 데이터를 2개 넣어서 보내던가
  // JSON 아이템 자체를 넣어서
  nextPage(startTime, isUsed) {

    if(isUsed) {
      this.presentAlert('예약 거부','이미 예약되있습니다.');
      return;
    }

    console.log("before : " + startTime);
    this.navCtrl.push(ReservationRoomDetailPage, { 
      date: this.date ,
      roomName : this.roomName ,
      roomId : this.roomId ,
      startTime : startTime
    })
  }

  nextPageDatePick() {
    console.log("clicked : nextPageDatePick()");

    // 클릭한 날짜 정보 전달
    this.navCtrl.push(FavPage, {roomName : this.roomName});
  }


}
