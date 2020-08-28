import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any, name:string): any {
    if (!name){
      return value;
    }
    if (!value){
      return [];
    }
    return value.filter( value => value.specName.toLowerCase().indexOf(name.toLowerCase()) !== -1 )
  }

}
