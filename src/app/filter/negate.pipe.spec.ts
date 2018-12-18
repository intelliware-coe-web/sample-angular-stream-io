import { NegatePipe } from './negate.pipe';
import {TestScheduler} from 'rxjs/testing';

describe('NegatePipe', () => {
  it('should negate an incoming stream', () => {
    new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    }).run(({cold, expectObservable}) => {
      const pipe = new NegatePipe();
      const source$ = cold('--a--b', {a: true, b: false});
      expectObservable(pipe.transform(source$)).toBe('--a--b', {a: false, b: true});
    });
  });
});
