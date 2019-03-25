import { Component } from '@angular/core';
import { CompaniesService } from 'src/app/service/companies.service';

@Component({
  selector: 'nuevo-negocio',
  templateUrl: 'nuevo-negocio.component.html',
  styleUrls: ['nuevo-negocio.component.scss']
})
export class NuevoNegocioComponent {
  error : string;
  result : string;
  constructor( private companiesService: CompaniesService){}

  onSave(form) {
    this.companiesService.createCompany(form)
      .then((response)=> {
        this.result = 'Compañia creada correctamente'
        console.log('formulario creado', response)
      })
      .catch((error) => {
        this.error = 'Hubo un error en la creación de la empresa';
        console.error('error en la creación de la empresa', error)
      })
  }
}
