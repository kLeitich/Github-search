import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: any){
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      
      const interval: any = {
        Year: 31536000,
        Month: 2592000,
        Weeks: 604800,
        Days: 86400,
        Hour: 3600,
        Minute: 60,
        Second: 1,
      };
      let dayCount;
      for (const i in interval) {
        dayCount = Math.floor(seconds / interval[i]);
        if (dayCount > 0)
          if (dayCount === 1) {
            return `${dayCount} ${i}` ;
          } 
          else {
            return `${dayCount} ${i}`;
            
          }
      }
    }
    return value;
  }
}
