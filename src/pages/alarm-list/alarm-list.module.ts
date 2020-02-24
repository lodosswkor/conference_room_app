import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlarmListPage } from './alarm-list';

@NgModule({
  declarations: [
    AlarmListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlarmListPage),
  ],
})
export class AlarmListPageModule {}
