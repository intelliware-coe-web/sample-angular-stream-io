import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './container/home-container/home-container.component';
import {ListContainerComponent} from './container/list-container/list-container.component';

const routes: Routes = [
  {path: '', component: HomeContainerComponent},
  {path: 'list', component: ListContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
