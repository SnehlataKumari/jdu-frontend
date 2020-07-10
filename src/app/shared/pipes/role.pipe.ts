import { Pipe, PipeTransform } from '@angular/core';
import { USER_ROLES } from 'src/app/constants';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return USER_ROLES[value].label || 'Unkown Role';
  }

}
