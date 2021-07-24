import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerPipe'
})
export class CustomerPipePipe implements PipeTransform {

  transform(value: number, args?: number): number {
    console.log(typeof(value));
    console.log(typeof(args));
          
    if(args!=undefined)  {
      
         return value + 2 + args;
 
  } else {
 
          return value + 2;
  }
  }

}
