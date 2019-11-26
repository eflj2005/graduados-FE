import { Component, OnInit, PipeTransform} from '@angular/core';
import {formatDate} from '@angular/common';
import { FormControl } from '@angular/forms';
import {AmbienteService} from '@servicios/ambiente.service';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

interface PersonaTemporarl { 
  Id:number,
  Nombre:string,
  Programa:string,
  Cedula:number,
  IdPerona:number,
  FechaActualizacion:string,
  Seleccionado: boolean}



@Component({
  selector: 'app-personas-agendamiento-crear',
  templateUrl: './personas-agendamiento-crear.component.html',
  styleUrls: ['./personas-agendamiento-crear.component.css'],
  providers: [DecimalPipe]
})
export class PersonasAgendamientoCrearComponent implements OnInit {

  mostarBoton: boolean ;
    seleccion: boolean  ;
    FechaInicio : any ;
  responsable = 0;
  constructor(private datosAmbiente : AmbienteService) {
    // this.dateFormatormat(this.now, "dddd, mmmm dS, yyyy");
    this.FechaInicio= formatDate(new Date(), 'yyyy-MM-dd', 'en');
 

    if(this.PersonasSeleccionadas.length != 0  ){
      this.mostarBoton = true;
    }
    else {
      this.mostarBoton = false;
    }
   }
  
   ngOnInit() {
      
  }
  
PersonasSeleccionadas:Array<PersonaTemporarl> = [];

  Personas: Array<PersonaTemporarl> = [ {
    Id:1,
    Nombre:"Juan Camilo Caviedes Toro ",
    Programa:"Contaduria",
    Cedula:1007405687,
    IdPerona:12345678,
    FechaActualizacion:"12-12-2019",
    Seleccionado: false
  },
  {
    Id:2,
    Nombre:"Fernando Suarez Martinez ",
    Programa:"Contaduria",
    Cedula:1011234187,
    IdPerona:12345678,
    FechaActualizacion:"12-11-2019",
    Seleccionado: false
  },
  {
    Id:1,
    Nombre:"Ernesto Gonzales Cabrera ",
    Programa:"Contaduria",
    Cedula:1007405687,
    IdPerona:12345678,
    FechaActualizacion:"12-12-2019",
    Seleccionado: false
  },
  {
    Id:2,
    Nombre:"Angie Jimena Cabezas ",
    Programa:"Contaduria",
    Cedula:1011234187,
    IdPerona:12345678,
    FechaActualizacion:"12-11-2019",
    Seleccionado: false
  },
  {
    Id:1,
    Nombre:"Luis Felipe Perez ",
    Programa:"Contaduria",
    Cedula:1007405687,
    IdPerona:12345678,
    FechaActualizacion:"12-12-2019",
    Seleccionado: false
  },
  {
    Id:2,
    Nombre:"Luisa Mara Sanchez Ortiz ",
    Programa:"Contaduria",
    Cedula:1011234187,
    IdPerona:12345678,
    FechaActualizacion:"12-11-2019",
    Seleccionado: false
  },
  {
    Id:1,
    Nombre:"Cesar Duvan Martinez",
    Programa:"Ingenieria de sistemas",
    Cedula:1007405687,
    IdPerona:12345678,
    FechaActualizacion:"12-12-2019",
    Seleccionado: false
  },
  {
    Id:2,
    Nombre:"Diego Fernando Osorio ",
    Programa:"Ingenieria de sistemas",
    Cedula:1011234187,
    IdPerona:12345678,
    FechaActualizacion:"12-11-2019",
    Seleccionado: false
  }
];

 

  
  // Mostar(){
  //   console.log(this.Personas);
  // }
  quitarPersonas(){
    this.PersonasSeleccionadas.forEach((elemento,indice) => {
      if(elemento.Seleccionado){
        elemento.Seleccionado =false;
        this.Personas.push( Object.assign({}, elemento));
       
        this.PersonasSeleccionadas.splice(indice,1);
        
      }
    });
  }

  agregarPersonas(){
    
    this.Personas.forEach((elemento,indice) => {

     if(elemento.Seleccionado){
       elemento.Seleccionado =false;
       this.PersonasSeleccionadas.push( Object.assign({}, elemento));
      
       this.Personas.splice(indice,1);
       
     }
   });
 }

 Cancelar(){
  this.datosAmbiente.agendaModo.modo = 1;
}
}

