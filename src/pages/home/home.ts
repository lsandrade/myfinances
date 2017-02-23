import { Component, OnInit } from '@angular/core';

//import { Validators, FormBuilder } from '@angular/forms';

import { NgForm } from '@angular/forms';


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
  nomeTeste: string;
  email: string;
  cadastro: any = {};

  constructor(public navCtrl: NavController, public service: ServiceProvider, /*public formBuilder: FormBuilder*/) {
    /*this.cadastro = this.formBuilder.group({
      nome:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required]
    });*/

  }

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

  postDados(f){
    //console.log(this.cadastro.value);
    console.log(f.value);
    this.service.postData(f.value)
      .subscribe(
        data=>console.log(data.message),
        err=>console.log(err)
      );
  }




}
