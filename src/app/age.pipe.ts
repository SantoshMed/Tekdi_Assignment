import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): string {
    const currYear = new Date().getFullYear();
    const birthYear = new Date(value).getFullYear();
    const age = currYear - birthYear;

    return age + ' Years';
  }

}
