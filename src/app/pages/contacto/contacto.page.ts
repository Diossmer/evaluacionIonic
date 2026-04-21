import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// IMPORTACIÓN DE COMPONENTES DE INTERFAZ:
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonRange, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  // Importamos los componentes, agregando IonRange, IonLabel e IonCard para visualización
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonRange, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class ContactoPage implements OnInit {

  // Variables para simular los datos del formulario de contacto
  nombre: string = '';
  mensaje: string = '';
  prioridad: number = 3; // Nivel de prioridad predeterminado

  // Variable para almacenar el mensaje enviado y mostrarlo en la vista
  datosEnviados: any = null;

  constructor() { }

  ngOnInit() {
  }

  // MÉTODO PARA SIMULAR EL ENVÍO DEL FORMULARIO Y MOSTRAR RESULTADO
  enviarMensaje() {
    if (this.nombre.trim() !== '' && this.mensaje.trim() !== '') {
      
      // Guardamos los datos para mostrarlos en el HTML
      this.datosEnviados = {
        nombre: this.nombre,
        mensaje: this.mensaje,
        prioridad: this.prioridad
      };

      // Limpiamos los campos del formulario
      this.nombre = '';
      this.mensaje = '';
      this.prioridad = 3;
    } else {
      alert('Por favor, ingresa tu nombre y tu mensaje.');
    }
  }

}
