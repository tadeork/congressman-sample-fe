import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value === 'F') return 'Female';
    if (value === 'M') return 'Male';
    return value;
  }

}
