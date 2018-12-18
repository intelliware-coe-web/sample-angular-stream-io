import {Component} from '@angular/core';
import {WikipediaEffectService} from '../../effect/wikipedia-effect.service';
import {map, startWith} from 'rxjs/operators';
import {merge, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {
  private readonly search$ = new Subject<string>();

  readonly hideSpinner$: Observable<boolean>;
  readonly searchResults$: Observable<any>;

  constructor(private wikipediaEffect: WikipediaEffectService) {
    this.searchResults$ = this.wikipediaEffect.findArticles(this.search$);

    this.hideSpinner$ = merge(
      this.search$.pipe(map(() => false)),
      this.searchResults$.pipe(map(() => true)),
    ).pipe(startWith(true));
  }

  onSearch(search) {
    this.search$.next(search);
  }
}
