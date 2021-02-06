import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatttingPage } from './chattting.page';

const routes: Routes = [
  {
    path: '',
    component: ChatttingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatttingPageRoutingModule {}
