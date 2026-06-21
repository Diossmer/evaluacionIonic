import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, personOutline, personSharp, mailOutline, mailSharp, moonOutline, moonSharp } from 'ionicons/icons';

/**
 * Componente Raíz de la aplicación.
 * Se encarga de alojar el menú lateral (Sidebar) y el `<ion-router-outlet>`, que es el 
 * espacio donde se inyectarán dinámicamente las demás páginas (Inicio, Contacto, etc).
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonToggle],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Información personal', url: '/informacion-personal', icon: 'person' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
  ];

  constructor() {
    addIcons({ homeOutline, homeSharp, personOutline, personSharp, mailOutline, mailSharp, moonOutline, moonSharp });
  }

  toggleDarkMode(event: any) {
    document.documentElement.classList.toggle('ion-palette-dark', event.detail.checked);
  }
}