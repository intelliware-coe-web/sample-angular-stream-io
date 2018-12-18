import {WikipediaEffectService} from './wikipedia-effect.service';
import {FetchService} from '../infrastructure/fetch.service';
import {TestScheduler} from 'rxjs/testing';
import SpyObj = jasmine.SpyObj;

describe('WikipediaEffectService', () => {
  const fetchService: SpyObj<FetchService> = jasmine.createSpyObj('fetchService', ['request']);
  const fixture: WikipediaEffectService = new WikipediaEffectService(fetchService);

  it('should be created', () => {
    new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    }).run(({hot, expectObservable}) => {
      const payload = {};
      fetchService.request.and.returnValue(hot('a|', { a: payload}));
      const test$ = fixture.findArticles(hot('--a--b', {a: 'url1', b: 'url2'}));

      expectObservable(test$).toBe('--a--a', {a: payload});
    });
  });
});
