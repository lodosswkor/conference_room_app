import { NgModule } from '@angular/core';
import { MonthNamePipe } from './month-name/month-name';
@NgModule({
	declarations: [MonthNamePipe],
	imports: [],
	exports: [MonthNamePipe]
})
export class PipesModule {}
