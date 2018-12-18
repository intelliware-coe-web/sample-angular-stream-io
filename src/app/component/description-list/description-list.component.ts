import {Component, Input} from '@angular/core';
import {SearchResult} from '../../model/SearchResult';

@Component({
  selector: 'app-description-list',
  template: `
    <dl class="uk-description-list uk-description-list-divider">
      <ng-container *ngFor="let result of results">
        <dt>
          <a [href]="result.href" [title]="result.title">{{result.title}}</a>
        </dt>
        <dd>{{result.description}}</dd>
      </ng-container>
    </dl>
  `
})
export class DescriptionListComponent {
  @Input() results: SearchResult[];
}
