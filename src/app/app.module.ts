import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeContainerComponent} from './container/home-container/home-container.component';
import {HttpClientModule} from '@angular/common/http';
import {NegatePipe} from './filter/negate.pipe';
import {ComponentModule} from './component/component.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    NegatePipe
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
