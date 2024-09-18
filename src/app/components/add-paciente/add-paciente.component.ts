import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit{
  pacienteForm: FormGroup;

  constructor(private fb: FormBuilder, private pacienteService: PacienteService) {
    this.pacienteForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      sexo: ['', Validators.required],
      endereco: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      filiacaoMae: ['', Validators.required],
      filiacaoPai: ['', Validators.required],
      numeroSUS: ['', Validators.required],
      localDeAcomodacao: ['', Validators.required],
      tipoDeBeneficio: ['', Validators.required],
      grauDeDependencia: ['', Validators.required],
      observacao: ['', Validators.required],
    });
  }

  ngOnInit(): void {
      console.log("Add Paciente")
  }

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      this.pacienteService.createPaciente(this.pacienteForm.value).subscribe(
        response => {
          console.log('Paciente added successfully', response);
          this.pacienteForm.reset();
        },
        error => {
          console.error('Error adding paciente', error);
        }
      );
    }
  }

  onCancel(): void {
    console.log("cancel")
  }

}
