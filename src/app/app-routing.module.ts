import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './layout/Publico/sesion/sesion.component';
import { ContenidComponent } from './layout/Privado/cabezal-admin/pages/contenid/contenid.component';
import { ProductosComponent } from './layout/Privado/productoss/pages/productos/productos.component';
import { HistorialComponent } from './layout/Privado/historial/pages/historial/historial.component';
import { ConfGenComponent } from './layout/Privado/configuracion-adm/pages/conf-gen/conf-gen.component';


const routes: Routes = [
  {path:'sinsesion',component:SesionComponent,loadChildren:()=>import('./modules/login/login.module').then(m=>m.loginModule)},
  {path:'sesion',component:ContenidComponent,loadChildren:()=>import('./modules/principal/principal.module').then(m=>m.principalModule)},
  {path:'post/productos',component:ProductosComponent},
  {path:'post/historial',component:HistorialComponent},
  {path:'post/perfil',component:ContenidComponent,loadChildren:()=>import('./layout/Privado/perfil/perfil.module').then(m=>m.perfilModule)},
  {path:'post/configuraciones',component:ConfGenComponent},
  {path:"**",redirectTo:'sinsesion/login'},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
