import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {
  api : string = 'http://127.0.0.1/eu/';

  constructor(public http: Http) {}
    getData(){
       return this.http.get(this.api+'api.php').map(res => res.json());
     }

     postData(params){
       let headers = new Headers({'Content-type':'application/x-www-form-urlencoded'});
       return this.http.post(this.api+'cadastro.php',params,{
         headers: headers,
         method: "POST"
       }).map(
         (res:Response) => {return res.json();}
       );
     }

     deleteData(id){
       let headers = new Headers({'Content-type':'application/x-www-form-urlencoded'});
       return this.http.post(this.api+'deleta.php',id,{
         headers: headers,
         method: "POST"
       }).map(
         (res:Response) => {return res.json();}
       );
     }

     updateData(id){
       let headers = new Headers({'Content-type':'application/x-www-form-urlencoded'});
       return this.http.post(this.api+'atualiza.php',id,{
         headers: headers,
         method: "POST"
       }).map(
         (res:Response) => {return res.json();}
       );
     }

}
