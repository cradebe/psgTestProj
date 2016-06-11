import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

/**
 *
 * 4. FILTRY
 *
 *    - Deklaracja
 *
 */

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform {
  transform(date:Date):string {
    return moment(date).fromNow();
  }
}