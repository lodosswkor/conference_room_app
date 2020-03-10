import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-list',
  templateUrl: 'setting-list.html',
})
export class SettingListPage {

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, isUsed: boolean }>;

  constructor(public storage: Storage, public platform: Platform, public fcm: FCM, public navCtrl: NavController, public navParams: NavParams) {

    //this.storage = new Storage();
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    // Let's populate this page with some filler content for funzies
    this.icons = ['paper-plane', 'build'];
    this.items = [];

    this.items.push({
      title: '푸시설정',
      note: '',
      icon: this.icons[0],
      isUsed: true
    });

    this.items.push({
      title: '버전정보',
      note: 'v1.0.0',
      icon: this.icons[1],
      isUsed: true
    });

    this.storage.get('topic_default').then((val) => {
      console.log(val);
      this.items[0].isUsed = val;
    });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }

  setPush(isUsed) {

    this.storage.set('topic_default', isUsed);

    if (isUsed) {
      this.fcm.subscribeToTopic('default');
    } else {
      this.fcm.unsubscribeFromTopic('default');
    }

  }

}


