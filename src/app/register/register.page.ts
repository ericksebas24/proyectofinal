import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  registerFormMessages = {
    primernombre: [
      {type: 'required', message: 'El Primer Nombre es obligatorio'},
    ],
    segundonombre: [
      {type: 'required', message: 'El Segundo Nombre es obligatorio'},
    ],
    primerapellido: [
      {type: 'required', message: 'El Primer Apellido es obligatorio'},
    ],
    segundoapellido: [
      {type: 'required', message: 'El Segundo Nombre es obligatorio'},
    ],
    nickname: [
      {type: 'required', message: 'El nickname es obligatorio'},
      {type: 'minlength', message: 'El nickname debe ser de minimo 6 caracteres'}
    ],
    email: [
      {type: 'email',
      message: 'Este valor debe ser un email'}
    ],
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }
  async registerUser(){
    if (this.registerForm.valid){

      const { nickname, email, password} = this.registerForm.value;
      const user= await this.authService.register(nickname, email, password);
      console.log(user);
    }
  }
   loginFacebook(){
    alert('funciona');
  }



  private buildForm(){
    this.registerForm = this.formBuilder.group({
      primernombre: ['', [Validators.required]],
      segundonombre: ['', [Validators.required]],
      primerapellido: ['', [Validators.required]],
      segundoapellido: ['', [Validators.required]],
      nickname: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
