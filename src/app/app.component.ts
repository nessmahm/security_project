import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassroomFormComponent } from './modals/classroom-form/classroom-form..component';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learnRoom-frontend-angular';
  modalService = inject(NgbModal);
  isLoggedIn$: Observable<boolean>;
  authService = inject(AuthService);
  constructor() {
    this.isLoggedIn$ = this.authService.isAuthenticated$;
  }
  openModal() {
    this.modalService.open(ClassroomFormComponent);
  }
}
