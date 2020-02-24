import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationRoomListPage } from './reservation-room-list';

@NgModule({
  declarations: [
    ReservationRoomListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationRoomListPage),
  ],
})
export class ReservationRoomListPageModule {}
