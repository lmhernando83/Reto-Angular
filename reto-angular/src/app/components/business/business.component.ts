import { Component, Input } from '@angular/core';
import { CompanyModel } from 'src/app/model/company.model';

@Component({
  selector: 'app-business',
  templateUrl: 'business.component.html',
  styleUrls: ['business.component.scss']
})
export class BusinessComponent {

  @Input() business:CompanyModel;
}
