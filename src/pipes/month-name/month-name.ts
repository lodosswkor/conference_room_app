import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MonthNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'monthName',
})
export class MonthNamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  // transform(value: string, ...args) {
  //   return value.toLowerCase();
  // }

  transform(value, ...args) {
    var monthNames = [ '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월' ];
    return monthNames[value - 1];
  }

  // transform(value, ...args) {
  //   var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
  //       'July', 'August', 'September', 'October', 'November', 'December' ];
  //   return monthNames[value - 1];
  // }

}
