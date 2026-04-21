import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, personOutline, personSharp, mailOutline, mailSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Información personal', url: '/informacion-personal', icon: 'person' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
  ];

  constructor() {
    addIcons({ homeOutline, homeSharp, personOutline, personSharp, mailOutline, mailSharp });
  }
}