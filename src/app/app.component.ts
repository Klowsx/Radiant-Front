import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './features/auth/login/components/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './features/auth/register/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    LoginComponent,
    NavComponent,
    CommonModule,
    RegisterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Radiant-Front';

  constructor(private http: HttpClient) {}
  isModalOpen = false;

  abrirModal() {
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
  }
}
