import {Component} from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="uk-text-center">
      <span uk-spinner="ratio: 4.5"></span>
    </div>`
})
export class SpinnerComponent {
}
