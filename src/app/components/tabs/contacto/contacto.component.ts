import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  send() {
    Swal.fire('Mensaje enviado!')
  }

}
