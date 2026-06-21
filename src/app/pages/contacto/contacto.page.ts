import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonRange, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, LoadingController, ToastController } from '@ionic/angular/standalone';

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
  nombreError: boolean = false;
  mensajeError: boolean = false;

  // Historial de mensajes
  mensajesEnviados: any[] = [];

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

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
  async enviarMensaje() {
    this.nombreError = this.nombre.trim() === '';
    this.mensajeError = this.mensaje.trim() === '';

    if (!this.nombreError && !this.mensajeError) {
      const loading = await this.loadingCtrl.create({
        message: 'Enviando mensaje...',
        duration: 1000
      });
      await loading.present();

      await loading.onDidDismiss();

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

      const toast = await this.toastCtrl.create({
        message: '¡Mensaje enviado con éxito!',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, completa los campos marcados en rojo.',
        duration: 2000,
        color: 'danger',
        position: 'bottom'
      });
      await toast.present();
    }
  }

}
