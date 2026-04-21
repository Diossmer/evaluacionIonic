import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// IMPORTACIÓN DE COMPONENTES DE INTERFAZ:
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonRange, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  // Importamos los componentes, agregando IonBadge para el color
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonRange, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge]
})
export class ContactoPage implements OnInit {

  // Variables para simular los datos del formulario de contacto
  nombre: string = '';
  mensaje: string = '';
  prioridad: number = 3; // Nivel de prioridad predeterminado

  // Arreglo para almacenar el historial de mensajes enviados (se borra al refrescar)
  mensajesEnviados: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  // MÉTODO PARA ASIGNAR UN COLOR DINÁMICO SEGÚN EL RANGO
  getColorPrioridad(nivel: number): string {
    switch (nivel) {
      case 1: return 'success';   // 1 = Verde (Muy baja)
      case 2: return 'tertiary';  // 2 = Morado/Azul (Baja)
      case 3: return 'primary';   // 3 = Azul (Normal)
      case 4: return 'warning';   // 4 = Amarillo (Alta)
      case 5: return 'danger';    // 5 = Rojo (Muy alta/Urgente)
      default: return 'primary';
    }
  }

  // MÉTODO PARA SIMULAR EL ENVÍO DEL FORMULARIO Y MOSTRAR RESULTADO
  enviarMensaje() {
    if (this.nombre.trim() !== '' && this.mensaje.trim() !== '') {
      
      // Guardamos el nuevo mensaje agregándolo al inicio del arreglo
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
