import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-trabajar',
  templateUrl: './trabajar.component.html',
  styleUrls: ['./trabajar.component.css']
})
export class TrabajarComponent {
  profession: string = "";
  selected: number = 0;

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  )
  {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      depto: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
    })
  }

  onSelected(value:string) {
    if (value == "Sin estudios" || value == "Bachiller") {
      this.selected = 1;
    } else if (value == "Técnico") {
      this.selected = 2;
    } else if (value == "Tecnólogo") {
      this.selected = 2;
    } else if (value == "Profesional") {
      this.selected = 2;
    } else {
      this.selected = 0;
    }
  }

  buscarEmpleo() {
    Swal.fire({
      title: 'Quieres enviar la hoja de vida?',
      text: "Recuerda que las vacantes se ajustan a tu lugar de residencia!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Enviada!',
          'Tu hoja de vida ha sido enviada, pronto nos contactaremos.',
          'success'
        );
        this.form.reset();
      }
    });
  }

  capacitacionVirtual() {
    Swal.fire({
      title: 'Quieres recibir capacitación virtual?',
      text: "Recuerda que las capacitaciones tienen cupos limitados!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar solicitud!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Enviada!',
          'Tu solicitud ha sido enviada, pronto nos contactaremos.',
          'success'
        );
        this.form.reset();
      }
    });
  }

  desarrollarProducto() {
    Swal.fire({
      title: 'Quieres desarrollar un producto?',
      text: "Recuerda que los productos ya deben tener ideas bases establecidas!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar solicitud!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Enviada!',
          'Tu solicitud ha sido enviada, pronto nos contactaremos.',
          'success'
        );
        this.form.reset();
      }
    });
  }

  postularCargo() {
    Swal.fire({
      title: 'Quieres postularte a un cargo?',
      text: "Recuerda que las postulaciones se realizan acorde a los cupos solicitados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar solicitud!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Enviada!',
          'Tu solicitud ha sido enviada, pronto nos contactaremos.',
          'success'
        );
        this.form.reset();
      }
    });
  }


}
