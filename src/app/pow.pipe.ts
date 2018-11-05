import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'appPow'
})
export class PowPipe implements PipeTransform{
  transform(value,num){
    return value**num;
  }
  // transform(value:firstNum:secondNum){
  //   return value**2;
  // }

}
