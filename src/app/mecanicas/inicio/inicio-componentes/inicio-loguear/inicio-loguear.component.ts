import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AmbienteService } from '@app/servicios/ambiente.service'
import { AutenticacionService } from '@app/servicios/autenticacion.service';
import { IRespuesta } from '@app/modelos/respuesta.interface';

@Component({
  selector: 'app-inicio-loguear',
  templateUrl: './inicio-loguear.component.html',
  styleUrls: ['./inicio-loguear.component.css']
})
export class InicioLoguearComponent implements OnInit {
  documento:string= null;
  clave:string= null;
  suscrito:any=null;
    
  modo:number=null;   //Modo de inicio =>  1 = Login normal, 2 = Nuevo Administrador

  procesando:boolean=null;

  constructor( 
    private rutas: Router, 
    private rutaActiva: ActivatedRoute, 
    private datosAmbiente: AmbienteService,
    private auntenticador: AutenticacionService
  ){
    this.documento="";
    this.clave="";
    this.procesando=false;
  }

  ngOnInit() {
    /*
    this.suscrito = this.rutaActiva.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.modo = +params['modo'];
    }); 
    */
  }    


  ngOnDestroy() {
    //this.suscrito.unsubscribe();
  }

  ValidarLogin(){
    alert("envio formulario Login");
    this.procesando=true;

    const respuesta = this.auntenticador.IniciarSesion(Number(this.documento),this.clave).subscribe(;
      (notificacion:IRespuesta) => {
        switch (notificacion.codigo){
          case 1:         //login ok
            this.rutas.navigate(["/dashboard"]);
          break;
          case 2:         //es estudiante

          break;          
          case 3:         //autenticación erronea

          break;
          case 4:         //usuario bloqueado

          break;          
        }
      }

    )

    
    
  }

  RecuperarClave(){
    this.datosAmbiente.inicioModo=3;
    this.datosAmbiente.inicioPaso=1;
  }

}


 