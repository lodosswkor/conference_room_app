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
  roomData: any;

  domain: string = 'http://localhost:3000';
  path: string = '/api';

  constructor(public http: HTTP, public httpClient: HttpClient) {
    console.log('Hello OpenApiServiceProvider Provider');
  }

  registerToken(token) {

    var url = 'http://localhost:3000/api/setUsers/token=' + token;

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

  getReservation(date) {
    var url = 'http://localhost:3000/api/getReservation';

    // 서비스에 코드 추가
    // EX : date = '2020-02-26'
    return new Promise(resolve => {
      this.observable = this.httpClient.get(url,
        {
          params: {
            date: date
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

  setReservation() {
    var url = 'http://localhost:3000/api/setReservation';

    // 서비스에 코드 추가
    return new Promise(resolve => {
      this.observable = this.httpClient.get(url,
        {
          params: {
            title: '주간회의',
            date: '2020-02-26',
            userName: '조길상',
            roomName: '커뮤니티룸2',
            startTime: '15:00',
            endTime: '16:00',
            token: 'test'
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

    // var url = 'http://localhost:3000/api/getRooms';
    var url = 'http://ec2-3-14-249-213.us-east-2.compute.amazonaws.com:3000/api/getRooms';

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

  get() {

    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=e9a29b293e27414b333b8e7c47663cc7', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

  }

  post() {

    console.log('post');

    // this.data = {
    //   title: "조길상",
    //   date: "2020-02-26",
    //   userName: "조길상",
    //   roomName: "커뮤니티룸2",
    //   sTime: "15:00",
    //   eTime: "16:00"
    // };

  }

}
