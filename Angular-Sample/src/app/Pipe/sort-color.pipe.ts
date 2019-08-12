import { Pipe, PipeTransform } from '@angular/core';
import dummyData from '../dummyJSON';
@Pipe({
  name: 'sortColor'
})
export class SortColorPipe implements PipeTransform {

  transform(value: any, fallback: any): any {
    if(value == ''){
      return dummyData
    } else {
      return dummyData.filter(elem => {
        return elem.color.indexOf(value) > -1
      })
    }
  }

}
