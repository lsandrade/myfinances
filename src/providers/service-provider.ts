import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import Observable from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {
  api:string ='http://localhost:82/api/api/';
  constructor(public http: Http) {
    //console.log('Hello ServiceProvider Provider');
  }
  getData(){
   	 return this.http.get(this.api+'apiRecupera.php').map(res=>res.json())
   }

}
