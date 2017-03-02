import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';


/*

  Generated class for the DaoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DaoProvider {

  list = [];
  db= [];

  constructor(public http: Http, public storage:Storage) {
    console.log('Hello DaoProvider Provider');
    this.list= [ {descricao:"Alimentação"},
                  {descricao:"Lazer"},
                  {descricao:"Transporte"}];

  }

  generateUid(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  getList(){

    //storage
    this.db=[];
    this.storage.forEach((value, key, index)=>{
      console.log("This is the value ", value);
    	console.log("from the key ", key);
    	console.log("Index is ", index);
      this.db.push(value);
    });
    return this.db;
    //local
    //return this.list;
  }

  insert(conta){
    //local
    //this.list.push(conta);

    //storage
    this.storage.set('conta'+this.generateUid(),conta);
    this.db.push(conta);
  }

  edit(conta){

  }

  delete(conta){
    let pos = this.list.indexOf(conta);
    this.list.splice(pos, 1);
  }

}
