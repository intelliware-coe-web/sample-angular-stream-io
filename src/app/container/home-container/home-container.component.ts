import {Component, ViewChild} from '@angular/core';
import {WikipediaEffectService} from '../../effect/wikipedia-effect.service';
import {map, startWith} from 'rxjs/operators';
import {defer, merge, Observable} from 'rxjs';
import {always} from 'ramda';
import {SearchComponent} from '../../component/search/search.component';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {
  @ViewChild(SearchComponent)
  readonly searchComponent: SearchComponent;

  readonly hideSpinner$: Observable<boolean|any>;
  readonly searchResults$: Observable<any>;

  constructor(readonly wikipediaEffect: WikipediaEffectService) {
    const search$ = defer(() => this.searchComponent.search);
    this.searchResults$ = wikipediaEffect.findArticles(search$);

    this.hideSpinner$ = merge(
      search$.pipe(map(always(false))),
      this.searchResults$.pipe(map(always(true))),
    ).pipe(startWith(true));
  }
}
