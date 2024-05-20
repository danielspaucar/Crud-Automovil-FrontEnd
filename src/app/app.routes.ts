import { Routes } from '@angular/router';
import { ListarAutomovilComponent } from './componentes/automovil/listar-automovil/listar-automovil.component';
import { AddAutomovilComponent } from './componentes/automovil/add-automovil/add-automovil.component';
import { EditAutomovilComponent } from './componentes/automovil/edit-automovil/edit-automovil.component';

export const routes: Routes = [
    {path:'automovil',component:ListarAutomovilComponent},
    {path:'nuevoAutomovil',component:AddAutomovilComponent},
    {path:'editarAutomovil',component:EditAutomovilComponent}
];
