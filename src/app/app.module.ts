import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas'
import { ModalContasPage } from '../pages/modal-contas/modal-contas'


import {ServiceProvider} from '../providers/service-provider';
import {DaoProvider} from '../providers/dao-provider';

import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContasPage,
    ModalContasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContasPage,
    ModalContasPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
              {provide: ServiceProvider, useClass: ServiceProvider},
              {provide: DaoProvider, useClass: DaoProvider},
              Storage]
})
export class AppModule {}
