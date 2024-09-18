import { Component, OnInit } from '@angular/core';
import { PacienteService, Paciente } from 'src/app/services/paciente.service';


@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: Paciente[] = [];
  displayedColumns: string[] = ['nome'];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(data => {
      this.pacientes = data;
      console.log(this.pacientes)
    });
  }
}
