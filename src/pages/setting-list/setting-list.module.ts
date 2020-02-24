import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingListPage } from './setting-list';

@NgModule({
  declarations: [
    SettingListPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingListPage),
  ],
})
export class SettingListPageModule {}
