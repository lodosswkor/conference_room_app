// check는 단 하나만
// check에 따라 선택해서 진행하기
// 예약내용, 예약자 값 없을시 알람, 미 진행
// 화면이동...;;; 액티비티 종료처럼 만들기
// setReservation 한다음 화면 종료
// 시간로직 구현 1시간,2시간
// 왼쪽 오른쪽 패딩 감소


import { HTTP } from '@ionic-native/http';
import { HttpClient } from "@angular/common/http"; //HttpClient 추가한다.

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
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
  path: string = '/api'

  constructor(public http: HTTP, public httpClient: HttpClient) {
    console.log('Hello OpenApiServiceProvider Provider');
  }

  // home.ts
  roomData: any;

  // reservation-room-lists
  private startTimeArr = ['08:00',
    '08:30',
    '09:00',
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

    this.reservationsData =[];

    // 스케줄 화면 구현
    for (var i = 0; i < this.startTimeArr.length - 1; i++) {

      var value:any = {
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
              token: json.token
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
        console.log(data);
        this.roomData = data // 데이터 받기
        console.log(this.roomData);

      });
    }

    // get() {

    //   this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=e9a29b293e27414b333b8e7c47663cc7', {}, {})
    //     .then(data => {

    //       console.log(data.status);
    //       console.log(data.data); // data received by server
    //       console.log(data.headers);

    //     })
    //     .catch(error => {

    //       console.log(error.status);
    //       console.log(error.error); // error message as string
    //       console.log(error.headers);

    //     });

    // }


  }
