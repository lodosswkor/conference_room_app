import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationRoomListPage } from '../reservation-room-list/reservation-room-list';
import { OpenApiServiceProvider } from '../../providers/open-api-service/open-api-service';

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

  public date: string = '';
  public backupDate: string = '';
  public service:any;
  public roomName :string = '';

  constructor(public openApiServiceProvider : OpenApiServiceProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.roomName = navParams.get('roomName');
      console.log(this.roomName);
      
      this.service = openApiServiceProvider;
      this.backupDate = this.service.date;

  }

  nextPage() {
    this.service.date = this.date;
    this.service.getReservation(this.date, this.roomName);
    this.navCtrl.pop();
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }

  onDaySelect(e) {
    console.log(e);

    var year = String(e.year);
    var month = String(e.month + 1);
    var day = String(e.date);

    if (month.length < 2)
      month = '0' + month;

    if (day.length < 2)
      day = '0' + day;

    this.date = [year , month , day].join("-");
  }

  onMonthSelect(e) {
    console.log(e);
  }

}
