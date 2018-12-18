import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="uk-text-center">
      <span uk-spinner="ratio: 4.5" [hidden]="isHidden"></span>
    </div>`
})
export class SpinnerComponent {
  @Input() isHidden: boolean;
}
