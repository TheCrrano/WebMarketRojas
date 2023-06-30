import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/shared/servicios/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm!:FormGroup;

  constructor(private fb:FormBuilder,private loginPrd:AutentificacionService,
    private routerprd:Router) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }
    
    if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
      alert("usuario o contraseña invalido")
    }else{
      this.routerprd.navigateByUrl("/sesion/principal")

    }
    
    
  }

  public get f():any{
    return this.myForm.controls;
  }
}
