import { Injectable } from '@angular/core';
import { Persona } from '../../Ayuda/Models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor() { }
  get(): Persona[] {
      return JSON.parse(localStorage.getItem('datos'));
  }

  post(persona: Persona) {
      let personas: Persona[] = [];
      if (this.get() != null) {
        personas = this.get();
      }
      personas.push(persona);
      localStorage.setItem('datos', JSON.stringify(personas));
  }

  excede(valor : number)
  {
    let monto = this.obtenerMonto();
    let tope = 600000000;
    if(valor + monto > tope)
    {
      return true;
    }
    else{
      return false;
    }
  }
  
  obtenerMonto()
  {
    let personas: Persona[] = this.get();
    let monto = 0.0;
    for (const persona of personas) {
      monto = monto + persona.ayudaHumanitaria.valorApoyo;
    }
    return monto;
  }
}
