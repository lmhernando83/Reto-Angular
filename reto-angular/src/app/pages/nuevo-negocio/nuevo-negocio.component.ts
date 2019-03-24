import { Component } from '@angular/core';
import { CompaniesService } from 'src/app/service/companies.service';

@Component({
  selector: 'nuevo-negocio',
  templateUrl: 'nuevo-negocio.component.html',
  styleUrls: ['nuevo-negocio.component.scss']
})
export class NuevoNegocioComponent {

  constructor( private companiesService: CompaniesService){
  }



  onSave(form) {
    this.companiesService.createCompany(form).then((response)=> {
      console.log('formulario creado', response)
    })
  }
}
