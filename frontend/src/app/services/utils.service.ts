import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  constructor ( private router: Router){}


  /* ========== Enruta a cualquier página disponible ========== */
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  /* ========== Guarda un elemento en localstorage ========== */
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  /* ========== Obtiene un elemento desde localstorage ========== */
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
