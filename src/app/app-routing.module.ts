import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from '../app/registro/registro.component';
import { HomeComponent }  from '../app/home/home.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', component: HomeComponent},
      { path: 'registro', component: RegistroComponent },
    ]

    


  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
