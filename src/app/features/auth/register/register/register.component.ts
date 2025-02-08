import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../../core/services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  //Variables para guardar del usuario
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  phone: string = '';
  address: string = '';
  role: string = '';

  isOpen = false;
  @ViewChild('modal') modal!: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: ModalService
  ) {
    this.modalService.registerModal$.subscribe(
      (state) => (this.isOpen = state)
    );
  }
  cerrar() {
    this.modalService.closeModals();
  }

  closeModal(event: Event) {
    if (this.modal && !this.modal.nativeElement.contains(event.target)) {
      this.cerrar();
    }
  }

  abrirLogin() {
    this.modalService.openLogin();
  }

  register() {
    const registerData = {
      email: this.email,
      role: this.role,
      password: this.password,
      name: this.firstName,
      last_name: this.lastName,
      phone: this.phone,
      address: this.address,
    };

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.http
      .post('http://localhost:8080/auth/register', registerData)
      .subscribe({
        next: (response) => {
          console.log('Registro completado: ', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error al registrar: ', error);
        },
      });
  }
}
