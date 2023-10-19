import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-trabajar',
  templateUrl: './trabajar.component.html',
  styleUrls: ['./trabajar.component.css']
})
export class TrabajarComponent {
  profession: string = "";
  selected: number = 0;

  constructor()
  {}

  onSelected(value:string) {
    if (value == "Sin estudios" || value == "Bachiller") {
      this.selected = 1;
    } else if (value == "Técnico") {
      this.selected = 2;
    } else if (value == "Tecnólogo") {
      this.selected = 3;
    } else if (value == "Profesional") {
      this.selected = 4;
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
        )
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
        )
      }
    });
  }


}
