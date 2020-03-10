import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  // 체크한 시간
  // 30, 60, 90 ,120
  checkTime: any = '30';

  // setReservation 의 값
  startTime: string = '';
  backUpstartTime: string = '';
  endTime: string = '';
  roomName: any = '';
  date: any = '';

  title: any = '';
  userName: any = '';
  service: any;

  startHour: number = 0;
  startMin: number = 0;
  endHour: number = 0;
  endMin: number = 0;

  constructor(private alertCtrl: AlertController,
    public openApiServiceProvider: OpenApiServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.service = openApiServiceProvider;

    // 이전화면에서 선택된 회의실 이름, 예약 시작시간, 날짜를 가져온다.
    this.roomName = navParams.get('roomName');
    this.startTime = navParams.get('startTime');
    this.backUpstartTime = this.startTime;
    this.date = navParams.get('date');

    this.startHour = Number(this.startTime.split(":")[0]);
    this.startMin = Number(this.startTime.split(":")[1]);

    console.log('after page: ' + this.roomName);
    console.log('after page: ' + this.startTime);
    console.log('after page: ' + this.date);

  }

  // 시간을 선택한 경우
  changeRadio() {
    console.log(this.checkTime);

  }

  presentAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['확인']
    });
    alert.present();
  }

  // 체크한 시간에 따라, setReservation을 호출
  confirmReservation() {

    // null 값 체크
    // alert 하기

    if(this.title === ''){
      this.presentAlert("필수입력","예약 내용을 입력하세요.");
      return;
    }

    if(this.userName === ''){

      this.presentAlert("필수입력","사용자 이름을 입력하세요.");
      
      return;
    }

    var numTime = Number(this.checkTime);

    // 네번 순환 한다
    for (let i = 0; i < (numTime / 30); i++) {

      var endHourStr = '';
      var endMinStr = '';

      // 종료시각은 정시
      if (this.startMin === 0) {
        this.endHour = this.startHour;
        this.endMin = 30;
      }
      // 종료시각은 30분
      else {
        this.endHour = this.startHour + 1;
        this.endMin = 0;
      }

      var endHourStr: string = String(this.endHour);
      var endMinStr: string = String(this.endMin);

      // 12시 이전
      if (String(endHourStr).length < 2) {
        endHourStr = '0' + endHourStr;
      }

      // 0인경우 -> 00으로 변경
      if (endMinStr.length < 2)
        endMinStr = '0' + endMinStr;

      // 최종시간
      this.endTime = [endHourStr, endMinStr].join(":");

      console.log("endTime : " + this.endTime);
      this.setReservation(this.startTime, this.endTime);

      this.startTime = this.endTime;
      this.startHour = this.endHour;
      this.startMin = this.endMin;

    }

    this.presentAlert("예약완료",this.backUpstartTime + "에서 " + this.checkTime + "분 예약하셨습니다.");

    // 순환문 종료
    this.service.getReservation(this.date, this.roomName);
    this.navCtrl.pop();
    
 
  }

  // 예약진행
  setReservation(startTime, endTime) {

    // check 값에서 endTime을 받아온다.
    // for문을 돌린다.

    var json = {
      title: this.title,
      date: this.date,
      userName: this.userName,
      roomName: this.roomName,
      startTime: startTime,
      endTime: endTime,
      token: ''
    }
    console.log(json);

    this.service.setReservation(json);
  }

  goBack() {
    console.log("clicked : goBack()")
    this.navCtrl.pop();
  }

  nextPage() {
    console.log("clicked : nextPage()")
    this.navCtrl.push(HomePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationRoomDetailPage');
  }

}
