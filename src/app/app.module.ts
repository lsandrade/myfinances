import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas'

import {ServiceProvider} from '../providers/service-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContasPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},{provide: ServiceProvider, useClass: ServiceProvider}]
})
export class AppModule {}
