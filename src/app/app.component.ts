import { Component } from '@angular/core';
import { AutentificacionService } from './shared/servicios/autentificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rojas Market';

  constructor(private loginPrd:AutentificacionService){

  }

  
}
