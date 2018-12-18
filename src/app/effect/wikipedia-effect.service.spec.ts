import {WikipediaEffectService} from './wikipedia-effect.service';
import {FetchService} from '../infrastructure/fetch.service';
import {TestScheduler} from 'rxjs/testing';
import SpyObj = jasmine.SpyObj;
import {SearchResult} from '../model/SearchResult';

describe('WikipediaEffectService', () => {
  const fetchService: SpyObj<FetchService> = jasmine.createSpyObj('fetchService', ['request']);
  const fixture: WikipediaEffectService = new WikipediaEffectService(fetchService);

  it('should be created', () => {
    new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    }).run(({cold, expectObservable}) => {
      const payload = ['te', ['test'], ['desc'], ['link']];
      fetchService.request.and.returnValue(cold('a|', { a: payload}));
      const actual$ = fixture.findArticles(cold('--a', {a: 'url1'}));
      const expected = [new SearchResult('test', 'desc', 'link')];

      expectObservable(actual$).toBe('-- 1000ms a', {a: expected});
    });
  });
});
