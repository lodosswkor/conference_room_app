import { HttpClient } from '@angular/common/http';
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

  constructor(public http: HttpClient) {
    console.log('Hello OpenApiServiceProvider Provider');
  }

  observable: Observable<Object>;

  data: any; // JSON 데이터
  dataToString: string; // JSON데이터 -> String 변환

  items: string[] = []; // 아이템 리스트

  url = 'http://api.openweathermap.org/data/2.5/weather?';
  lat = '?lat='
  lon = '&lon='
  q = 'q=';
  appid = '&appid=38d5fcf82539352d7fe5db34f0c88491';

  // post() {

  //   console.log('post');

  //   this.data = {
  //     title: "조길상",
  //     date: "2020-02-26",
  //     userName: "조길상",
  //     roomName: "커뮤니티룸2",
  //     sTime: "15:00",
  //     eTime: "16:00"
  //   };

  //   return new Promise((resolve, reject) => {
  //     this.http.post('http://15.165.187.77:8080/res' + '/insert',
  //       JSON.stringify(this.data), {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //     ).subscribe(data => {
  //         resolve(data);
  //         console.log(data);
  //       }, (err) => {
  //         reject(err);
  //         console.log(err);
  //       });
  //   }).then(data => {

  //     console.log(data);
  //   });

  // }

  post() {

    console.log('post');

    this.data = {
      title: "조길상",
      date: "2020-02-26",
      userName: "조길상",
      roomName: "커뮤니티룸2",
      sTime: "15:00",
      eTime: "16:00"
    };

    return new Promise((resolve, reject) => {
      this.observable = this.http.post('http://15.165.187.77:8080/res' + '/insert',
        JSON.stringify(this.data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      this.observable.subscribe(data => {
        resolve(data);
        //console.log(data);
      }, (err) => {
        reject(err);
        //console.log(err);
      });
    }).then(data => {

      console.log(data);
    });

  }

  getJsonFromApi(url) {

    return new Promise(resolve => {
      this.observable = this.http.get(url);
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {

      this.dataToString = JSON.stringify(data); // 문자열 변환
      console.log(this.dataToString);

      this.data = data // 데이터 받기

      this.setItem(this.data); // JSON 데이터 넘김

    });

  }


  // 아이템 설정
  setItem(data) {
    this.items[0] = data.coord.lon; // 위도
    this.items[1] = data.coord.lat; // 경도
    // this.items[2] = this.getCalc(data.main.temp); // 온도
    this.items[3] = data.main.humidity; // 습도 %
    this.items[4] = data.clouds.all; // 구름양 %
  }


}
