import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {DescriptionListComponent} from './description-list/description-list.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    SearchComponent,
    DescriptionListComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SearchComponent,
    DescriptionListComponent,
    SpinnerComponent,
  ]
})
export class ComponentModule { }
