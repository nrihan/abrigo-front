import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacienteComponent } from './components/add-paciente/add-paciente.component';
import { PacienteListComponent } from './components/list-pacientes/paciente-list.component';

const routes: Routes = [
  { path: 'add-paciente', component: AddPacienteComponent },
  { path: 'list-pacientes', component: PacienteListComponent },
  { path: '', redirectTo: '/list-pacientes', pathMatch: 'full' },
  { path: '**', redirectTo: '/list-pacientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
