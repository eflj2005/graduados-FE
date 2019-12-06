import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { RespuestaInterface } from '@interfaces/respuesta.interface';
import { AreaInterface } from '@interfaces/area.interface';

@Component({
  selector: 'app-maestras-componentes-procesar',
  templateUrl: './maestras-componentes-procesar.component.html',
  styleUrls: ['./maestras-componentes-procesar.component.css']
})
export class MaestrasComponentesProcesarComponent implements OnInit {


  controlador: any;

  modal:NgbModalRef;
  titulo:string;

  modo:number;
  datos:AreaInterface;

  numeroModelo:string;
  correoModelo:string;  

  constructor(
    private utilidadFechas: DatePipe
  ) 
  {
    this.titulo ="";

    this.numeroModelo="^[0-9]*$";
    this.correoModelo="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$";

  }

  ngOnInit() {
    if(this.modo == 1){
      this.titulo = "Creación " + this.controlador.nombreTabla.substr(0,1).toUpperCase()+ this.controlador.nombreTabla.substr(1);
    }
    else{
      this.titulo = "Modificación " + this.controlador.nombreTabla.substr(0,1).toUpperCase()+ this.controlador.nombreTabla.substr(1);
    }


    
  }


  Guardar(){

    if(this.modo==1) this.controlador.Agregar(this.datos);
    if(this.modo==2) this.controlador.Modificar(this.datos);

    this.controlador.Guardar(false).subscribe(
      (notificacion:RespuestaInterface) => {
        switch (notificacion.codigo){
          case 200:         //login ok         

            alert("GUARDADO");
            this.modal.close('GUARDAR');
          break;
          case 400:         //autenticación erronea / Usuario Bloqueado / Usuario Inactivo
            alert(notificacion.asunto + ": " + notificacion.mensaje);
          break;
        }
      }
    );          
  }

  Cancelar(){
    this.modal.dismiss('CANCELAR');
  }

  ProcesarSelectEnum( tipo:string ){
    let regex = /\'/gi;

    let valores:string =tipo.substr(5,tipo.length-6);
    valores = valores.replace(regex, "");
    
    return valores.split(',');
    
  }

  ProcesarSelectId( campo:string, opcion:string ){
    let partes:string[] = campo.split("_");
    var opciones:any[] = this.controlador.ObtenerForanea(partes[0]).todos;
    return opciones;
  }

  ObtenerOptionTextEnum( opcion:string, opciones:string ){
    let arregloOpciones:string[] = opciones.split(",");
    var optionText:string = "";

    arregloOpciones.forEach(elemento => {
      if(elemento.includes(opcion+"-")){
        optionText = elemento.substr(2);
      }
    });
    
    return optionText;
  }
}
