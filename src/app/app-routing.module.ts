import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresosComponent } from './egresos/egresos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VerEgresosComponent } from './ver-egresos/ver-egresos.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'egresos',
    component: EgresosComponent
  },
  {
    path: 'ver_usuarios',
    component: VerUsuariosComponent
  },
  {
    path: 'ver_egresos',
    component: VerEgresosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
