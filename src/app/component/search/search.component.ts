import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <form class="uk-search uk-search-large uk-width-1-1">
      <span uk-search-icon></span>
      <input class="uk-search-input" type="search" placeholder="Search..." (input)="search.emit($event.target.value)">
    </form>`
})
export class SearchComponent {
  @Output()
  public search: EventEmitter<string> = new EventEmitter();
}
