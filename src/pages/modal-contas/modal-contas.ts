import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalContas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html'
})
export class ModalContasPage {

  conta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.conta = navParams.get("parametro") || {descricao:""};
    console.log("parametro: "+ navParams.get("parametro"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContasPage');
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.viewCtrl.dismiss(this.conta);
  }

}
