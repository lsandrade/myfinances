import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DaoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DaoProvider {

  list = [];
  constructor(public http: Http) {
    console.log('Hello DaoProvider Provider');
    this.list= [ {descricao:"Alimentação"},
                  {descricao:"Lazer"},
                  {descricao:"Transporte"}];
  }

  getList(){
    return this.list;
  }

  insert(conta){
    this.list.push(conta);
  }

  edit(conta){

  }

}
