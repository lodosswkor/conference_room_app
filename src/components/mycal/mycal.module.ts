import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MycalComponent } from './mycal';
import {PipesModule} from "../../pipes/pipes.module";
@NgModule({
  declarations: [
    MycalComponent,
    //MonthNamePipe,
  ],
  imports: [
    IonicModule,
    PipesModule,
  ],
  exports: [
    MycalComponent
  ]
})
export class MycalComponentModule {}