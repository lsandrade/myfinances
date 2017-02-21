import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  teste: string = "Teste";

  users:any[];

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    
  }

  getDados(){
  	this.service.getData().subscribe(
  		data => this.users = data,
  		err => console.log(err)
  	);
  }

}
