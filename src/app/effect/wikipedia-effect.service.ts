import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {debounce, map, switchMap} from 'rxjs/operators';
import {FetchService} from '../infrastructure/fetch.service';
import {SearchResult} from '../model/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class WikipediaEffectService {
  constructor(private readonly fetch: FetchService) {
  }

  public findArticles(search$): Observable<any> {
    return search$.pipe(
      debounce(() => timer(1000)),
      map(search => `http://en.wikipedia.org/w/api.php?action=opensearch&search=${search}`),
      switchMap(url => this.fetch.request.call(this.fetch, url)),
      map(this.adaptResult)
    );
  }

  private adaptResult([, titles, descriptions, links]) {
    return titles.map((title, index) => new SearchResult(title, descriptions[index], links[index]));
  }
}
