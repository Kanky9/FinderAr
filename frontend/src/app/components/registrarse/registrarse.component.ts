import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent {
  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [ Validators.required, Validators.minLength(3)]),
    telefono: new FormControl(null, [ Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    fecha: new FormControl(null, [Validators.required]),
    dni: new FormControl(null, [ Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    ubicacion: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    direccion: new FormControl('', [ Validators.required, Validators.minLength(4)]),
  });

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) {}

  async submit() {
    if (this.form.valid) {
      

      this.firebaseSvc.singUp(this.form.value as User).then(async (res) => {
          await this.firebaseSvc.updateUser(this.form.value.nombre);
          await this.firebaseSvc.updateUser(this.form.value.apellido);
          await this.firebaseSvc.updateUser(this.form.value.telefono);
          await this.firebaseSvc.updateUser(this.form.value.fecha);
          await this.firebaseSvc.updateUser(this.form.value.dni);
          await this.firebaseSvc.updateUser(this.form.value.ubicacion);
          await this.firebaseSvc.updateUser(this.form.value.direccion);

          let uid = res.user.uid;
          this.form.controls.uid.setValue(uid);

          this.setUserInfo(uid);
        })
        .catch((error) => {
          console.log(error);

          
        })
        .finally(() => {
          
        });
    }
  }

  async setUserInfo(uid: string) {
    if (this.form.valid) {
     
      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebaseSvc.setDocument(path, this.form.value).then(async (res) => {
          this.utilsSvc.saveInLocalStorage('user', this.form.value);
          this.utilsSvc.routerLink('/iniciar-sesion');
          this.form.reset();

          
        })
        .catch((error) => {
          console.log(error);

          
        })
        .finally(() => {
          
        });
    }
  }
}