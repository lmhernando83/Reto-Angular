import { Component } from '@angular/core';
import { FormService } from 'src/app/service/form.service';
import { CompanyModel } from 'src/app/model/company.model';

@Component({
  selector: 'mis-negocios',
  templateUrl: 'mis-negocios.component.html',
  styleUrls: ['mis-negocios.component.scss']
})

export class NegociosComponent {
  companies: Array<CompanyModel>;
  constructor(private formService: FormService) {

    this.formService.fetchCompanies().then((companies) => {
      this.companies = companies
    })
  }
}

