import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private static proxyRequests(url) {
    return `http://localhost:8080/${url}`;
  }

  constructor(private readonly http$: HttpClient) {
  }

  public request(url: string) {
    return of(url).pipe(
      map(href => FetchService.proxyRequests(href)),
      switchMap(request => this.http$.get(request)),
    );
  }

}
