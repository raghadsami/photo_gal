import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatttingPageRoutingModule } from './chattting-routing.module';

import { ChatttingPage } from './chattting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatttingPageRoutingModule
  ],
  declarations: [ChatttingPage]
})
export class ChatttingPageModule {}
