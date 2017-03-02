import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { DaoProvider } from '../../providers/dao-provider';
import { ModalContasPage } from '../modal-contas/modal-contas';


/*
  Generated class for the Contas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html'
})
export class ContasPage {

  listaContas: any;

  constructor(private navCtrl: NavController, public navParams: NavParams, public dao: DaoProvider, public modalCtrl: ModalController) {
    this.listaContas = dao.getList();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

  insert(){
    let modal = this.modalCtrl.create(ModalContasPage);

    modal.onDidDismiss(data=>{
      this.dao.insert(data);
    });
    modal.present();

  }

  edit(conta){
    let modal = this.modalCtrl.create(ModalContasPage, {"parametro":conta});
    console.log(conta);
    modal.onDidDismiss(data=>{
      this.dao.edit(data);
    });
    modal.present();
  }

  delete(conta){
    this.dao.delete(conta);
  }

}
