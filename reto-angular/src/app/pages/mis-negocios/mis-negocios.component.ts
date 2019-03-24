import { Component } from '@angular/core';
import { CompaniesService } from 'src/app/service/companies.service';
import { CompanyModel } from 'src/app/model/company.model';

@Component({
  selector: 'mis-negocios',
  templateUrl: 'mis-negocios.component.html',
  styleUrls: ['mis-negocios.component.scss']
})

export class NegociosComponent {
  companies: Array<CompanyModel>;
  constructor(private companiesService: CompaniesService) {

    this.companiesService.fetchCompanies().then((companies) => {
      this.companies = companies
    })
  }
}

