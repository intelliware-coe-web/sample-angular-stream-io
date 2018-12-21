import {Component} from '@angular/core';
import {WikipediaEffectService} from '../../effect/wikipedia-effect.service';
import {map, startWith} from 'rxjs/operators';
import {merge, Observable, Subject} from 'rxjs';
import {always} from 'ramda';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {
  private readonly search$: Subject<string>;

  readonly hideSpinner$: Observable<boolean|any>;
  readonly searchResults$: Observable<any>;

  constructor(readonly wikipediaEffect: WikipediaEffectService) {
    this.search$ = new Subject<string>();
    this.searchResults$ = wikipediaEffect.findArticles(this.search$);

    this.hideSpinner$ = merge(
      this.search$.pipe(map(always(false))),
      this.searchResults$.pipe(map(always(true))),
    ).pipe(startWith(true));
  }

  onSearch(search) {
    this.search$.next(search);
  }
}
