import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  teste: string = "Teste";
  users:any[];
  nome: boolean = false;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {}

  ngOnInit(){
    this.getDados();
  }

  mostraNome(){
    if(this.nome)
      this.nome = false;
    else
      this.nome = true;
  }

  getDados(){
    this.service.getData().subscribe(
      data => this.users = data.users,
      err => console.log(err)
    );
  }




}
