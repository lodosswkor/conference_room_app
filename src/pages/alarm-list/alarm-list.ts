import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlarmListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alarm-list',
  templateUrl: 'alarm-list.html',
})
export class AlarmListPage {

  private items = [
    {
      receiveDate: '20200225',
      text: '카이젠룸이 2020년 3월 10일, 10시~10시30분, 조길상, 2020년 2월 25일 수신',
      status: 'on',
    }, {
      receiveDate: '20200226',
      text: '카이젠룸이 2020년 3월 10일, 10시~10시30분, 조길상, 2020년 2월 25일 수신',
      status: 'on',
    }, {
      receiveDate: '20200227',
      text: '카이젠룸이 2020년 3월 10일, 10시~10시30분, 조길상, 2020년 2월 25일 수신',
      status: 'on',
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmListPage');
  }

}
