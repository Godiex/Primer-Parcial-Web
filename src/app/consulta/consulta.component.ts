import { Component, OnInit } from '@angular/core';
import { Persona } from '../Ayuda/Models/persona';
import { PersonaService } from '../Ayuda/Models/persona.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private personaService : PersonaService) { }
  personas = [];  
  monto  = this.personaService.obtenerMonto(); 
  ngOnInit(): void {
    this.personas = this.personaService.get();
  }


}
