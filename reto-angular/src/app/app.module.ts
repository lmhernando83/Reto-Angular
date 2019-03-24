import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoNegocioComponent } from './pages/nuevo-negocio/nuevo-negocio.component';
import { NegociosComponent } from './pages/mis-negocios/mis-negocios.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { BusinessComponent } from './components/business/business.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './service/form.service';


@NgModule({
  declarations: [
    AppComponent,
    NuevoNegocioComponent,
    NegociosComponent,
    FormComponent,
    HeaderComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
