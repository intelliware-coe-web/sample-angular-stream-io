import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'negate'
})
export class NegatePipe implements PipeTransform {

  transform(value: Observable<boolean>, args?: any): Observable<boolean> {
    return value.pipe(
      map(booleanValue => !booleanValue)
    );
  }

}
