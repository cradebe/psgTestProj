import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'number'})
export class NumberPipe implements PipeTransform {
  transform(number:number, fractionSize:number = 2):string {
    return number.toFixed(fractionSize);
  }
}