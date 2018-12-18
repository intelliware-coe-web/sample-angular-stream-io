import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {By} from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit the input value on input', (done) => {
    fixture.whenStable()
      .then(() => {
        component.search.subscribe(value => {
          expect(value).toBe('someValue');
          done();
        });

        const input = fixture.debugElement.query(By.css('input'));
        const element = input.nativeElement;

        expect(element.value).toBe('');
        element.value = 'someValue';
        element.dispatchEvent(new Event('input'));
      });
  });
});
