import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationRoomDetailPage } from './reservation-room-detail';

@NgModule({
  declarations: [
    ReservationRoomDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationRoomDetailPage),
  ],
})
export class ReservationRoomDetailPageModule {}
