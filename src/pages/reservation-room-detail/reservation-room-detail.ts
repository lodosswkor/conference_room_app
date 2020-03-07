import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationRoomListPage } from '../reservation-room-list/reservation-room-list';
import { HomePage } from '../home/home';
import { OpenApiServiceProvider } from '../../providers/open-api-service/open-api-service';

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

  startTime: any = '';
  roomName: any = '';
  date: any = '';

  title: any = '';
  userName: any = '';
  service: any;

  private items = [
    {
      time: '30',
      timeText: '30분',
      status: true
    }, {
      time: '60',
      timeText: '1시간',
      status: false
    }, {
      time: '120',
      timeText: '2시간',
      status: false
    }, {
      time: '180',
      timeText: '3시간',
      status: false
    }, {
      time: '240',
      timeText: '4시간',
      status: false
    }
  ];


  // 날짜 선택으로 이동
  constructor(public openApiServiceProvider: OpenApiServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.service = openApiServiceProvider;

    this.roomName = navParams.get('roomName');
    this.startTime = navParams.get('startTime');
    this.date = navParams.get('date');

    console.log('after page: ' + this.roomName);
    console.log('after page: ' + this.startTime);
    console.log('after page: ' + this.date);

  }

  setReservation() {

    // check 값에서 endTime을 받아온다.
    // for문을 돌린다.

    var json = {
      title: this.title,
      date: this.date,
      userName: this.userName,
      roomName: this.roomName,
      startTime: this.startTime,
      endTime: this.startTime,
      token: ''
    }
    console.log(json);

    this.service.setReservation(json);
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
