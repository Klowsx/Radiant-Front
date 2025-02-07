import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private loginModalSubject = new BehaviorSubject<boolean>(false);
  private registerModalSubject = new BehaviorSubject<boolean>(false);

  loginModal$ = this.loginModalSubject.asObservable();
  registerModal$ = this.registerModalSubject.asObservable();

  openLogin() {
    this.loginModalSubject.next(true);
    this.registerModalSubject.next(false);
  }

  openRegister() {
    this.registerModalSubject.next(true);
    this.loginModalSubject.next(false);
  }

  closeModals() {
    this.loginModalSubject.next(false);
    this.registerModalSubject.next(false);
  }
}
