import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cambiar-contrasenia',
  templateUrl: './cambiar-contrasenia.component.html',
  styleUrls: ['./cambiar-contrasenia.component.css'],
})
export class CambiarContraseniaComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) {}

  async submit() {
    if (this.form.valid) {
      

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then((res) => {
          
        console.log(res);
        
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