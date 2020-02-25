import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationRoomListPage } from '../reservation-room-list/reservation-room-list';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {
  currentEvents = [
    {
      year: 2019,
      month: 2,
      date: 25
    },
    {
      year: 2019,
      month: 2,
      date: 26
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  nextPage() {
    console.log("clicked : nextPage()")
    this.navCtrl.push(ReservationRoomListPage);
  }

  goBack() {
    console.log("clicked : goBack()")
    this.navCtrl.push(ReservationRoomListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }

  onDaySelect(e) {
    console.log(e);
  }
  onMonthSelect(e) {
    console.log(e);
  }

}
