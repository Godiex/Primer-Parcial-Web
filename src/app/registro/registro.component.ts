import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Persona } from '../Ayuda/Models/persona';
import { PersonaService } from '../Ayuda/Models/persona.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private personaService : PersonaService) { }

  ngOnInit(): void {
  }
  persona : Persona = new Persona();
  fecha = Date.now();
  agregarPersona(){
    if(this.personaService.noEsRepetida(this.persona.identificacion) )
    {
      if(!this.personaService.excede(this.persona.ayudaHumanitaria.valorApoyo))
      { 
        this.personaService.post(this.persona);
        alert("Persona registrada con exito");
      }
      else{
        alert("No hay suficiente dinero a entregar");
      }
    }
    else
    {
      alert("La persona ya se encuentra registrada");
    }
  }
  onSubmit(f) {
    console.log(f.value);
  }


}
