import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Data, User } from '../../../interfaces/user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {
  @ViewChild('user') user!:ElementRef<HTMLInputElement>
  @ViewChild('pass') pass!:ElementRef<HTMLInputElement>

  public currentUser?: User;

constructor(private authService:AuthService, private router:Router) {
  
}
public onLogin() {
  const valorUser = this.user.nativeElement.value;
  const valorPass = this.pass.nativeElement.value;

  Swal.fire({
    title: 'Iniciando sesión...',
    text: 'Por favor, espere.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  this.authService.login(valorUser, valorPass).subscribe((user) => {
    Swal.close();
    if (user) {
      console.log(user);
      this.currentUser = user;
      this.router.navigate(['/']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos',
        confirmButtonColor: '#f5cf3d',
        customClass: {
          popup: 'animated tada'
        }
      });
    }
  });

  this.user.nativeElement.value = "";
  this.pass.nativeElement.value = "";
}
}
