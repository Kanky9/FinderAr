import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private router: Router) {}

  isOriginalStyle: boolean = true;
  showCitiesDropdown: boolean = false; // Controla la visibilidad del menú desplegable de ciudades

  cities: any[] = [
    // Supongamos que tienes una lista de ciudades disponibles
    { id: 1, name: 'Ciudad 1' },
    { id: 2, name: 'Ciudad 2' },
    { id: 3, name: 'Ciudad 3' },
    { id: 4, name: 'Ciudad 4' },
    { id: 5, name: 'Ciudad 5' },
    { id: 6, name: 'Ciudad 6' },

    // Agrega más ciudades según sea necesario
  ];

  toggleCitiesDropdown() {
    this.showCitiesDropdown = !this.showCitiesDropdown;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url === '/inicio' || url === '/') {
          this.isOriginalStyle = true; // Aplicar estilos originales
        } else {
          this.isOriginalStyle = false; // Aplicar estilos modificados
        }
      }
    });
  }
}