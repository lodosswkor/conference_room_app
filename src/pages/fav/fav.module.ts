import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavPage } from './fav';
//import {MycalComponentModule} from '../../components/mycal/mycal.module'
import {MycalComponentModule} from 'customcal';
@NgModule({
  declarations: [
    FavPage,
  ],
  imports: [
    MycalComponentModule,
    IonicPageModule.forChild(FavPage),
  ],
})
export class FavPageModule {}
