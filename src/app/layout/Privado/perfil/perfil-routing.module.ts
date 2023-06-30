import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from "./pages/perfil/perfil.component";

const rutas:Routes = [
    {path:'',children:[
        {path:'',component:PerfilComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports:[RouterModule]

})
export class perfilRoutingModule{

}