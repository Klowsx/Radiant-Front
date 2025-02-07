import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavComponent {
  constructor(private modalService: ModalService) {}

  abrirLogin() {
    this.modalService.openLogin();
  }
}
