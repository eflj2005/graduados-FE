import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


import { AmbienteService } from '@app/servicios/ambiente.service';

@Component({
  selector: 'app-inicio-cambiar-clave',
  templateUrl: './inicio-cambiar-clave.component.html',
  styleUrls: ['./inicio-cambiar-clave.component.css']
})
export class InicioCambiarClaveComponent implements OnInit {
  
  claveActual:string;
  claveNueva:string;
  claveConfirmada:string;

  claveModelo:string=null;
  claveError:string=null;
  
  procesando:boolean=null;

  constructor( 
    private servicioEmergentes: NgbModal,
    private datosAmbiente: AmbienteService, 
    private rutas: Router 
  ) { 
    this.claveModelo="(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}";
    this.procesando=false;

    this.claveActual="";
    this.claveNueva="";
    this.claveConfirmada="";    
  }

  ngOnInit() {
  }


  ConfirmarCambio(){
    alert("Confirmo");
    this.procesando=true;

    /*


      PROCESAR ACTUALIZACION DE CLAVE


    */

    if(this.datosAmbiente.inicioModo != 1){
      
      
      this.datosAmbiente.inicioModo = 1; 
      this.datosAmbiente.inicioPaso = 1; 

      this.RecargarComponente();
    }


  }

  RecargarComponente(){
    this.rutas.routeReuseStrategy.shouldReuseRoute = function(){return false;};

    let currentUrl = this.rutas.url + '?';
  
    this.rutas.navigateByUrl(currentUrl).then(() => {
      this.rutas.navigated = false;
      this.rutas.navigate([this.rutas.url]);
    });
  }
}
