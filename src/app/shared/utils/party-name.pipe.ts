import { Pipe, PipeTransform } from '@angular/core';
import { PartyNames } from "../constants/Names";

@Pipe({
  name: 'partyName'
})
export class PartyNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value === 'D' ? PartyNames.D : PartyNames.R
  }

}
