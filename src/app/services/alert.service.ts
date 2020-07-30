import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(msg) {
    Swal.fire(
      msg,
      '',
      'success'
    )
  }

  error(msg) {
    Swal.fire(
      msg,
      '',
      'error'
    )
  }
}
