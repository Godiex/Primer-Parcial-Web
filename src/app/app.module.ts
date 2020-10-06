import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    BarraSuperiorComponent,
    RegistroComponent,
    HomeComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
