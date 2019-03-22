import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoNegocioComponent } from './pages/nuevo-negocio/nuevo-negocio.component';
import { NegociosComponent } from './pages/mis-negocios/mis-negocios.component';

const routes: Routes = [
    {
      path:'nuevo-negocio',
      component: NuevoNegocioComponent
    },{
      path:'mis-negocios',
      component: NegociosComponent
    },{
      path:'**',
      redirectTo: 'nuevo-negocio'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
