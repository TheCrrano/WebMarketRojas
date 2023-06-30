import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionComponent } from './layout/Publico/sesion/sesion.component';
import { ContenidComponent } from './layout/Privado/cabezal-admin/pages/contenid/contenid.component';
import { ProductosComponent } from './layout/Privado/productoss/pages/productos/productos.component';
import { HistorialComponent } from './layout/Privado/historial/pages/historial/historial.component';
import { PerfilComponent } from './layout/Privado/principals/pages/perfil/perfil.component';
import { ConfGenComponent } from './layout/Privado/configuracion-adm/pages/conf-gen/conf-gen.component';


@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    ContenidComponent,
    ProductosComponent,
    HistorialComponent,
    PerfilComponent,
    ConfGenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
