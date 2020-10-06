import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Persona } from '../../Ayuda/Models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor() { }
  get(): Persona[] {
      return JSON.parse(localStorage.getItem('apoyo'));
  }

  post(persona: Persona) {
      let personas: Persona[] = [];
      if (this.get() != null) {
        personas = this.get();
      }
      personas.push(persona);
      localStorage.setItem('apoyo', JSON.stringify(personas));
  }

  excede(valor : number)
  {
    var monto = this.obtenerMonto();
    var tope = 600000000;
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
    let personas : Persona[];
    var monto = 0;
    if (this.get() != null) {
      personas = this.get();
      personas.forEach(element =>
        { 
          monto += element.ayudaHumanitaria.valorApoyo;
        }
      );
      return monto
    }
    return monto;
  }

  noEsRepetida(cedula : string)
  {
    let personas : Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
      for (const persona of personas) {
        if(persona.identificacion == cedula){
          return false;
        }
      }
      return true;
    }
    else
    {
      return true;
    }
  }

}
