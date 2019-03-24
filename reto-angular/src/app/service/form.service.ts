import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyModel } from '../model/company.model';
import { environment } from 'src/environments/environment';


const API = environment.api_url;

@Injectable()

export class FormService {

  companies: any = [];

  constructor (private httpClient: HttpClient){
  }

  fectchCompany(){
    return this.httpClient.get(API)
      .toPromise()
      .then((companies: Array<any>) => {
        this.companies = companies.map(b => Object.assign({}, b, { publishDate: new Date(b.publishDate) }));
      });
  }


  saveBook(event: CompanyModel){
    let observable
    if(event.id){
      observable =  this.httpClient.put(`${API}/${event.id}`, event)
    }else{
      observable = this.httpClient.post(API, event)
    }
    return observable.toPromise().then(()=> this.fectchCompany);
  }
}
