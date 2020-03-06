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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  service : any;

  constructor( private fcm : FCM,
    service : OpenApiServiceProvider,
    private device: Device, 
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.service = service;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '회의실 목록', component: HomePage },
      { title: '알림 내역', component: AlarmListPage },
      { title: '설정', component: SettingListPage }
    ];

    this.initializeApp();
   
  }

  checkPlatform() {
    // 스마트폰
    if(this.platform.is('android') || this.platform.is('ios')) {

      // FCM 설정
      this.initFCM();
      
    }
    // 웹 화면
    else {
      console.log('this is desktop');
    }
  }

  initFCM(){

    // 전체 구독
    this.fcm.subscribeToTopic('default');

    // 토큰 획득
    this.fcm.getToken().then(token => {
      this.service.registerToken(token);
    });

    // 푸시알림 대기
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
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
