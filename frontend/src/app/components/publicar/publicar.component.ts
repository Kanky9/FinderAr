import { Component } from '@angular/core';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css'],
})
export class PublicarComponent {
  property = {
    image: '',
    name: '',
    location: '',
    price: 0,
    type: 'alquiler',
    area: 0,
    description: '',
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Puedes realizar alguna acción con el archivo seleccionado, como cargarlo o procesarlo.
  }

  submitProperty() {
    // Aquí puedes enviar los datos de la propiedad a través de una solicitud HTTP o realizar alguna otra acción.
    console.log(this.property);
    // Limpia los campos después de enviar el formulario
    this.clearFields();
  }

  clearFields() {
    this.property = {
      image: '',
      name: '',
      location: '',
      price: 0,
      type: 'alquiler',
      area: 0,
      description: '',
    };
  }
}
