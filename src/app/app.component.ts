import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FavPage } from '../pages/fav/fav';
import { SettingListPage } from '../pages/setting-list/setting-list';
import { AlarmListPage } from '../pages/alarm-list/alarm-list';
import { Device } from '@ionic-native/device';
import { FCM } from '@ionic-native/fcm';
import { OpenApiServiceProvider } from '../providers/open-api-service/open-api-service';
import { checkNoChangesNode } from '@angular/core/src/view/view';
import { Storage } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  service: any;
  storage: any;

  constructor(
    private androidPermissions: AndroidPermissions,
    storage: Storage,
    private fcm: FCM,
    service: OpenApiServiceProvider,
    private device: Device,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    this.service = service;
    this.storage = storage;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '회의실 목록', component: HomePage },
      // { title: '알림 내역', component: AlarmListPage },
      { title: '설정', component: SettingListPage }
    ];

    // 권한요청
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermissions([
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      ])
    );

    this.initializeApp();

  }

  checkPlatform() {

    // 스마트폰
    if (this.platform.is('android') || this.platform.is('ios')) {
      console.log('this is android or ios');
      // FCM 설정
      this.initFCM();

    }
    // 웹 화면
    else {
      console.log('this is desktop');
    }
  }

  initFCM() {

    // 처음 설치했는지 확인
    this.storage.get('init').then((val) => {
      if (val === null || val === false) {

        // 전체 구독
        this.storage.set('topic_default', true);
        this.fcm.subscribeToTopic('default');

        // 토큰 획득
        this.fcm.getToken().then(token => {
          this.service.registerToken(token);
          this.storage.set('token', token);
        });

        // 설치유무 체크
        this.storage.set('init', true);
      }
      else {

      }

    });

    // 푸시알림 대기
    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // 플랫폼 체크
      this.checkPlatform();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
