import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Doar', url: '/doar', icon: 'paper-plane' },
    { title: 'Receber', url: '/receber', icon: 'heart' },
    { title: 'Sobre', url: '/sobre', icon: 'person' },
  ];

  constructor() { }
}
