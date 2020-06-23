import { Component, OnInit } from '@angular/core';
import {AmbienteService} from '@servicios/ambiente.service'
import { AgendasInterface } from '@interfaces/agendas.interface';
import { AutenticacionService } from '@servicios/autenticacion.service';
import { AsignacionesController } from '@controladores/asignaciones.controller';
import { HttpClient } from '@angular/common/http';
import { EstructuraConsultas } from '@generales/estructura-consultas';
import { RespuestaInterface } from '@interfaces/respuesta.interface';
import { AgendasController } from '@controladores/agendas.controller';


interface AgendasCompletoInterface extends AgendasInterface  {
  creador: string;
  asignados: number;
}


@Component({
  selector: 'app-personas-subagendamiento-principal',
  templateUrl: './personas-subagendamiento-principal.component.html',
  styleUrls: ['./personas-subagendamiento-principal.component.css']
})
export class PersonasSubagendamientoPrincipalComponent implements OnInit {

  listaAgendas: AgendasCompletoInterface[] = [];
  usuarioId:number;

  agendaSeleccionada:number;
  
  controladorAsignaciones: AsignacionesController;
  controladorAgendas: AgendasController;
  controladorAgendasForaneo: AgendasController;
  

  constructor(
    private servicioAmbiente : AmbienteService,
    private llamadoHttp : HttpClient,    
    private autenticador: AutenticacionService,

  ) { 

    let caracteristicasConsultas:EstructuraConsultas;
    
    // this.listaAgendas.push( { id: 1, agendas_id: null, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 0, asignados: 10, creador: "Pepito Flores" } );      //10
    //   this.listaAgendas.push( { id: 2, agendas_id: 1, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 1, asignados: 5, creador: "Perencejto Rivas" } );    //5
    //     this.listaAgendas.push( { id: 4, agendas_id: 2, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 2, creador: "Sultanita Rojas" } );     //2
    //     this.listaAgendas.push( { id: 5, agendas_id: 2, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 2, creador: "Sultanita Rojas" } );     //2
    //     this.listaAgendas.push( { id: 6, agendas_id: 2, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 1, creador: "Sultanita Rojas" } );     //1
    //   this.listaAgendas.push( { id: 3, agendas_id: 1, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 1, asignados: 5, creador: "Perencejto Rivas" } );    //5
    //     this.listaAgendas.push( { id: 7, agendas_id: 3, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 3, creador: "Fabio Torres" } );        //3
    //     this.listaAgendas.push( { id: 8, agendas_id: 3, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 2, creador: "Fabio Torres" } );        //2

      this.listaAgendas.push( { id: 1, agendas_id: null, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 0, asignados: 10, creador: "Pepito Flores Primero" } );
      this.listaAgendas.push( { id: 2, agendas_id: 1, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 1, asignados: 5, creador: "Perencejto Rivas Segundo" } );
      this.listaAgendas.push( { id: 3, agendas_id: 1, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 1, asignados: 5, creador: "Perencejto Rivas Segundo" } );
      this.listaAgendas.push( { id: 4, agendas_id: 2, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 2, creador: "Sultanita Rojas Tercera" } );
      this.listaAgendas.push( { id: 5, agendas_id: 2, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 2, creador: "Sultanita Roja Tercera" } );
      this.listaAgendas.push( { id: 6, agendas_id: 2, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 1, creador: "Sultanita Rojas Tercera" } );
      this.listaAgendas.push( { id: 7, agendas_id: 3, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 3, creador: "Fabio Torres Cuarto" } );
      this.listaAgendas.push( { id: 8, agendas_id: 3, apertura_fecha: "2020-06-01", cierre_fecha: "2020-06-30", nivel: 2, asignados: 2, creador: "Fabio Torres Cuarto" } );

      this.usuarioId = this.autenticador.UsuarioActualValor.id;

      this.controladorAsignaciones = new AsignacionesController(llamadoHttp , servicioAmbiente);
      this.controladorAgendas = new AgendasController(llamadoHttp , servicioAmbiente);
      this.controladorAgendasForaneo = new AgendasController(llamadoHttp , servicioAmbiente);


      // caracteristicasConsultas = new EstructuraConsultas();
      // caracteristicasConsultas.AgregarFiltro( "asignaciones" , "usuarios_id" , "=", String(this.usuarioId) );
      // this.controladorAsignaciones.CargarDesdeDB( true, "S", caracteristicasConsultas ).subscribe( (respuestaAS:RespuestaInterface) => {           // Carge de Asignaciones
      //   // console.log(this.controladorAsignaciones.todos,"AsignacionesContro");
      // });

      caracteristicasConsultas = new EstructuraConsultas();
      // caracteristicasConsultas.AgregarColumna( null , "0", "asignados" ); //OJO HACER SUBCONSULTA
      // caracteristicasConsultas.AgregarColumna( null , "'Perencejito'", "creador" ); //OJO HACER SUBCONSULTA
      caracteristicasConsultas.AgregarEnlace( "asignaciones" ,  "agendas" ,  "asignaciones" );  //OJO PERMITIR ALIAS
      caracteristicasConsultas.AgregarFiltro( "asignaciones" , "usuarios_id" , "=", String(this.usuarioId) );
      caracteristicasConsultas.AgregarOrdenamiento( "agendas.id" , "ASC" );
      this.controladorAgendas.CargarDesdeDB( true, "A", caracteristicasConsultas ).subscribe( (respuestaAG:RespuestaInterface) => {           // Carge de Agendas
        // console.log(this.controladorAgendas.todos,"AgendasContro");

        // //OJO ajustar para permitir condicion con subconsulta y DISTINC
        // this.controladorAgendasForaneo.CargarDesdeDB( true, "S" ).subscribe( (respuestaAGF:RespuestaInterface) => {           // Carge de Asignaciones
        //   // console.log(this.controladorAgendasForaneo.todos, "A foraneaContro");
        //   this.controladorAgendas.AgregarForanea(this.controladorAgendasForaneo);

        // });

      });



  }



  ngOnInit() {

  }

}
