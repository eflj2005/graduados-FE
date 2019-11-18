import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';
import {DashboardComponentesModule} from '@mecanicas/dashboard/dashboard-componentes/dashboard-componentes.module'
import { RouterModule, Routes } from '@angular/router';
import { PersonasActualizacionPrincipalComponent } from '@mecanicas/personas/personas-actualizacion/personas-actualizacion-principal/personas-actualizacion-principal.component';

//Rutas para redirecciones por url
const rutas: Routes =[
  
    { path:'', component: DashboardPrincipalComponent , children:[
      { path:'lista', component:PersonasActualizacionPrincipalComponent},
    ]}

/*

  { path:'login', component: LoginComponent, children:[
    { path:'validar_codigo', component: ValidarCodigoComponent}
    { path:'cambiar_clave', component: RegitroAdministradorComponent }    
  ]}


*/

  /*
      { path:'recuperarClave', component:RecuperarClaveComponent},
      { path:'codigoVerificacion', component:CodigoVerificacionComponent},
      { path:'restablecerClave', component:RestablecerClaveComponent}
      */
];



@NgModule({
  declarations: [DashboardPrincipalComponent],
  imports: [
    CommonModule,
    DashboardComponentesModule,
    RouterModule.forChild(rutas)
  ]
})
export class DashboardModule { }
