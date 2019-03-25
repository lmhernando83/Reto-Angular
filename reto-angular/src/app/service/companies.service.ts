import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyModel } from '../model/company.model';
import { environment } from 'src/environments/environment';

const API = environment.api_url;

@Injectable()

export class CompaniesService {

  companies: Array<CompanyModel>;

  constructor (private httpClient: HttpClient){}

  fetchCompanies() {
    return this.httpClient.get(`${API}/company`)
      .toPromise()
      .then((companies: Array<CompanyModel>) => {
        this.companies = companies;
        return companies;
      });
  }


  createCompany(event: CompanyModel){
    let observable
    if(event.id){
      observable =  this.httpClient.put(`${API}/company/${event.id}`, event)
    }else{
      observable = this.httpClient.post(`${API}/company`, event);
    }
    return observable.toPromise().then((response)=> response);
  }
}


