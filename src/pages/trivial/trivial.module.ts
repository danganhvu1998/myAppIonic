import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrivialPage } from './trivial';

@NgModule({
  declarations: [
    TrivialPage,
  ],
  imports: [
    IonicPageModule.forChild(TrivialPage),
  ],
})
export class TrivialPageModule {}
