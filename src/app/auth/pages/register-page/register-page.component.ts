import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public formularioRegistro:FormGroup;
  constructor(private authService:AuthService,private router:Router,private formbuilder:FormBuilder,private validatorService:ValidatorService) {
    this.formularioRegistro=this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)]],
      user: ['',[Validators.required, Validators.minLength(3)]],
      pass1:['',[Validators.required,Validators.minLength(6)]],
      pass2:['',[Validators.required]]
    },{
      validators:[
        this.validatorService.isFieldOneEqualFieldTwo('pass1','pass2')
      ]
    })
  }


  onRegister(){

    this.formularioRegistro.markAllAsTouched();
    const valoresFormulario=this.formularioRegistro.value;
    const newUser:User={
      status:"OK",
      data:{
        user: valoresFormulario.user,
        pass:valoresFormulario.pass1,
        email: valoresFormulario.email        
      }
    }
    this.authService.existeUser(newUser).subscribe((existeUser) => {
      if (existeUser) {
        Swal.fire({
          icon: 'warning',
          title: 'Ya existe ese usuario',
          text: 'Lo siento, ese usuario ya está registrado'
        });
      } else {
        this.authService.register(newUser).subscribe((user) => {
          if (user) {
            Swal.fire({
              icon: 'success',
              title: 'Usuario registrado',
              text: 'Redirigiendo a la página de login',
              timer: 2000,
              showConfirmButton: false,
              didOpen: () => {
                Swal.showLoading();
              }
            });
            setTimeout(() => {
              this.router.navigate(['/auth/login']);
            }, 2000);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al registrar el usuario',
            });
          }
        });
      }
    });
    


  }
  isValidField ( field: string ){
    return this.validatorService.isValidField(this.formularioRegistro,field);
  }

}
