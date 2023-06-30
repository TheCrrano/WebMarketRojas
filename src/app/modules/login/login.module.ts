import { NgModule } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { loginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations:[LoginComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,loginRoutingModule]
})
export class loginModule{

}