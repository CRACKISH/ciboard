import { NgModule } from '@angular/core';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './components/';

@NgModule({
  imports: [
    BoardRoutingModule
  ],
  declarations: [
    BoardComponent
  ]
})
export class BoardModule {}
