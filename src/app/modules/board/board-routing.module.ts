import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './components/';

const routes: Routes = [{
  path: '',
  component: BoardComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class BoardRoutingModule {}
