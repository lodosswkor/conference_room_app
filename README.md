

회의실 예약 시스템

작업시작 : 2020-02-24

관리자 페이지 :
http://15.165.187.77:8080/admin
/admin : 회의실 추가
/res : 예약 추가

예약페이지 : 
http://15.165.187.77:8080/res
GET : 조회

POST : 신규 생성
http://15.165.187.77:8080/res/insert
Content-Type
{
"title" : "조길상",
"date" : "2020-02-26",
"userName" : "조길상",
"roomName" : "커뮤니티룸2",
"sTime" : "10:00",
"eTime" : "11:00"
}

PUT : 수정
DELETE : 삭제

예약 : 
http://15.165.187.77:8080/res/insert/2020-02-26

서버 깃허브 : 
https://github.com/lodosswkor/reserv_conference_room

API 정보 :
https://github.com/lodosswkor/reserv_conference_room/blob/develop/src/main/java/com/eland/meetingRoom/controller/AdminController.java