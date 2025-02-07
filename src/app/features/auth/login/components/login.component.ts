import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../../core/services/modal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  token: string = '';

  isOpen = false;

  @ViewChild('modal') modal!: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: ModalService
  ) {
    this.modalService.loginModal$.subscribe((state) => (this.isOpen = state));
  }

  cerrar() {
    this.modalService.closeModals();
  }

  closeModal(event: Event) {
    if (this.modal && !this.modal.nativeElement.contains(event.target)) {
      this.cerrar();
    }
  }

  abrirRegistro() {
    this.modalService.openRegister();
  }

  ////////////////////////////////////////////////////////////////////
  login() {
    const loginData = { email: this.email, password: this.password };

    this.http
      .post<any>('http://localhost:8080/auth/login', loginData)
      .subscribe({
        next: (response) => {
          this.token = response.token;
          localStorage.setItem('token', this.token);
          console.log('Token recibido: ', this.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error al realizar el login:', err);
        },
      });
  }
}
