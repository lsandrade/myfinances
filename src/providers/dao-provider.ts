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
  list: any = [ {descricao:"Alimentação"},
                {descricao:"Lazer"},
                {descricao:"Transporte"}];

  constructor(public http: Http) {
    console.log('Hello DaoProvider Provider');
  }

  getList(){
    return this.list;
  }

}
