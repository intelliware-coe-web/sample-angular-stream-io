import {Component} from '@angular/core';
import {WikipediaEffectService} from '../../effect/wikipedia-effect.service';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent {
  private readonly search$ = new Subject<string>();

  readonly hideSpinner$ = new BehaviorSubject<boolean>(true);
  readonly searchResults$: Observable<any>;

  constructor(private wikipediaEffect: WikipediaEffectService) {
    this.searchResults$ = this.wikipediaEffect.findArticles(this.search$)
      .pipe(
        tap(() => this.hideSpinner$.next(true))
      );
  }

  onSearch(search) {
    this.hideSpinner$.next(false);
    this.search$.next(search);
  }

}
