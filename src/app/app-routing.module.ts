import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from '../app/registro/registro.component';
import { HomeComponent }  from '../app/home/home.component';
import { ConsultaComponent }  from '../app/consulta/consulta.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', component: HomeComponent},
      { path: 'registro', component: RegistroComponent },
      { path: 'consulta', component: ConsultaComponent },
    ]

    


  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
