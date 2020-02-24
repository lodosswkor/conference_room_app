import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationDateListPage } from './reservation-date-list';

@NgModule({
  declarations: [
    ReservationDateListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationDateListPage),
  ],
})
export class ReservationDateListPageModule {}
