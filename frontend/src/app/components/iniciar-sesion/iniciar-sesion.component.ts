import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), 
    password: new FormControl( '', [Validators.required]), 
  });
  
  constructor(
    private  firebaseSvc: FirebaseService,
    private  utilsSvc: UtilsService
  ) { }

  

  async submit() {
    if (this.form.valid) {

      //const loading = await this.utilsSvc.presentCustomLoading('Iniciando sesión...');

      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        
        console.log(res);
        
        this.getUserInfo(res.user.uid); 
      })
        .catch(error => {
          console.log(error);

          
        })
          .finally(() => {
            //loading.dismiss(); 
          })
    }
  }

  async getUserInfo(uid: string) {
    if (this.form.valid) {

      
      let path = `users/${uid}`;

      this.firebaseSvc.getDocument(path).then( (user: User) => {

        this.utilsSvc.saveInLocalStorage('user', user);
        this.utilsSvc.routerLink('/inicio')
        this.form.reset();
      
      
      })
        .catch(error => {
          console.log(error);

        
        })
          .finally(() => {
            
          })
    }
  }
}