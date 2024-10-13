import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  standalone: true
})
export class AppendPipe implements PipeTransform {

  transform(title: string, appendString:string): string {
    return title+" "+appendString;
  }

}
