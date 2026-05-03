import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonRange, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonRange, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge]
})
export class ContactoPage implements OnInit {

  // Variables del formulario
  nombre: string = '';
  mensaje: string = '';
  prioridad: number = 3;

  // Historial de mensajes
  mensajesEnviados: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  // MÉTODO PARA ASIGNAR UN COLOR DINÁMICO SEGÚN EL RANGO
  getColorPrioridad(nivel: number): string {
    switch (nivel) {
      case 1: return 'success';
      case 2: return 'tertiary';
      case 3: return 'primary';
      case 4: return 'warning';
      case 5: return 'danger';
      default: return 'primary';
    }
  }

  // MÉTODO PARA SIMULAR EL ENVÍO DEL FORMULARIO Y MOSTRAR RESULTADO
  enviarMensaje() {
    if (this.nombre.trim() !== '' && this.mensaje.trim() !== '') {

      // Guarda el nuevo mensaje
      this.mensajesEnviados.unshift({
        nombre: this.nombre,
        mensaje: this.mensaje,
        prioridad: this.prioridad
      });

      // Limpiamos los campos del formulario
      this.nombre = '';
      this.mensaje = '';
      this.prioridad = 3;
    } else {
      alert('Por favor, ingresa tu nombre y tu mensaje.');
    }
  }

}
