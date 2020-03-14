
import { HTTP } from '@ionic-native/http';
import { HttpClient } from "@angular/common/http"; //HttpClient 추가한다.

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { Storage } from '@ionic/storage';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the OpenApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenApiServiceProvider {

  observable: Observable<Object>;

  domain: string = 'http://ec2-3-14-249-213.us-east-2.compute.amazonaws.com:3000'
  // domain: string = 'http://localhost:3000'
  path: string = '/api'

  constructor(public storage: Storage, public http: HTTP, public httpClient: HttpClient) {
    console.log('Hello OpenApiServiceProvider Provider');
  }

  // home.ts
  roomData: any;
  roomPushData: any;
  pushData : any ;

  // reservation-room-list
  date: string = '';

  // reservation-room-lists
  private startTimeArr = ['08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
  ];

  private endTimeArr = ['08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ];

  private reservationsData = [];


  registerToken(token) {

    var url = this.domain + this.path + '/setUsers/token=' + token;

    // 서비스에 코드 추가
    return new Promise(resolve => {
      this.observable = this.httpClient.get(url);
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {
      console.log(data);
    });

  }

  getReservation(date, roomName) {
    var url = this.domain + this.path + '/getReservation';

    // 서비스에 코드 추가
    // EX : date = '2020-02-26'
    // id, title, date, userName, roomeName, startTime, endTime, token
    return new Promise(resolve => {
      this.observable = this.httpClient.get(url,
        {
          params: {
            date: date,
            roomName: roomName
          }
        }
      );
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {
      console.log(data);
      this.setViewReservation(data);
      return data;
    });

  }

  // 현재 날짜로 예약정보 호출, 배열로 반환
  setViewReservation(data) {

    this.reservationsData = [];

    // 스케줄 화면 구현
    for (var i = 0; i < this.startTimeArr.length - 1; i++) {

      var value: any = {
        title: '',
        userName: '',
        startTime: '',
        endTime: '',
        isUsed: false
      };

      value.startTime = this.startTimeArr[i];
      value.endTime = this.endTimeArr[i];

      this.reservationsData.push(value);

    }

    for (let index in data) {
      var reservation = data[index];
      var startTimeReservation = reservation.startTime;

      // 화면에 표시된 날짜들 중
      for (let index in this.reservationsData) {
        // 시작시간이 일치한다면
        if (this.reservationsData[index].startTime === startTimeReservation) {
          // 화면에 예약정보를 표시한다.
          this.reservationsData[index].title = reservation.title;
          this.reservationsData[index].userName = reservation.userName;
          this.reservationsData[index].isUsed = true;
          break;
        }
      }
      // 뷰에 자동 표출

    }
  }

  setReservation(json) {
    var url = this.domain + this.path + '/setReservation';

    // 서비스에 코드 추가
    return new Promise(resolve => {
      this.observable = this.httpClient.get(url,
        {
          params: {
            title: json.title,
            date: json.date,
            userName: json.userName,
            roomName: json.roomName,
            startTime: json.startTime,
            endTime: json.endTime,
            token: json.token,
            roomId: json.roomId,
          }
        }
      );
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {
      console.log(data);
    });

  }

  getRooms() {

    var url = this.domain + this.path + '/getRooms';

    // 서비스에 코드 추가
    return new Promise(resolve => {
      this.observable = this.httpClient.get(url);
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {
      // 데이터를 받는다.
      this.roomData = data;
      // 데이터 받기
      console.log(data);

      var arr = [];

      // false를 만든다.
      for (let i in this.roomData) {
          arr.push(false);
      }

      this.pushData = arr;

      for (let i in this.pushData) {
       
        const key = String(i);
        console.log(key);

        this.storage.get(key).then((val) => {

          // 값이 저장되어있다면
          if (val !== null && val !== undefined) {

            console.log(val);
            this.pushData[i] = val;
          }
          // 값이 없다면
          else {
            this.storage.set(key, false);
          }
        });
      }


    });
  }

  getPushChecked(key) {
    console.log(key);
    this.storage.get(key).then((val) => {

      if (val === null || val === 0 || val === undefined) {
        this.storage.set(key, false);
        console.log('return false;');
        return false;
      }
      else {
        console.log(val);
        return val;
      }
    });
  }

}
