import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeContainerComponent} from './home-container.component';
import {WikipediaEffectService} from '../../effect/wikipedia-effect.service';
import {NegatePipe} from '../../filter/negate.pipe';
import {ComponentModule} from '../../component/component.module';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContainerComponent, NegatePipe ],
      imports: [ ComponentModule ],
      providers: [
        {provide: WikipediaEffectService, useClass: FakeWikipediaEffectService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class FakeWikipediaEffectService {
  constructor() {}
  public findArticles(search$) {
    return search$;
  }
}
