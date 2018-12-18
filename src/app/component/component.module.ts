import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {DescriptionListComponent} from './description-list/description-list.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {BrowserModule} from '@angular/platform-browser';

const exportable = [
  SearchComponent,
  DescriptionListComponent,
  SpinnerComponent,
];

@NgModule({
  declarations: [
    ...exportable
  ],
  imports: [
    BrowserModule
  ],
  exports: exportable
})
export class ComponentModule {
}
