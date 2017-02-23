import { Component, OnInit } from '@angular/core';

//import { Validators, FormBuilder } from '@angular/forms';

import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import {ServiceProvider} from '../../providers/service-provider';

import { AlertController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController,
    public service: ServiceProvider, /*public formBuilder: FormBuilder*/
    public alertCtrl: AlertController
  ) {
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

  deletarDados(user){
    console.log(user);
    /*this.service.postData(user.id)
      .subscribe(
        data=>{console.log(data.message); this.getDados();},
        err=>console.log(err)
      );*/
  }

  editarDados(req){
    //console.log(req);
    let prompt = this.alertCtrl.create({
      title: 'Editar Perfil',
      inputs: [
        {name:'nome', placeholder:'Nome', value: req.nome},
        {name:'email', placeholder:'E-mail', value: req.email}
      ],
      buttons: [
        { text: 'Cancelar', handler: data=>{ console.log("Cancelado."); } },
        { text: 'Salvar', handler: data=> { let params: any{id: req.id, nome: data.nome, email: data.email}
                                            console.log(data);
                                            this.service.updateData(params).subscribe(
                                              data=>console.log(data.message),
                                              err=>console.log(err)
                                            );
                                            this.getDados();
                                          }
        }
      ]
    });
    prompt.present();

    /*this.service.postData(user.id)
      .subscribe(
        data=>{console.log(data.message); this.getDados();},
        err=>console.log(err)
      );*/
  }




}
