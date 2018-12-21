import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeContainerComponent} from './container/home-container/home-container.component';
import {HttpClientModule} from '@angular/common/http';
import {NegatePipe} from './filter/negate.pipe';
import {ComponentModule} from './component/component.module';
import { ListContainerComponent } from './container/list-container/list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    NegatePipe,
    ListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
