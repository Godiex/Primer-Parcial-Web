import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Persona } from '../Ayuda/Models/persona';
import { PersonaService } from '../Ayuda/Models/persona.service';

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
  agregarPersona(){

  }
}
