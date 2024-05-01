import { Component, OnInit, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'propiedades', route: 'properties' },
    { title: 'información usuario', route: 'user-info' },
  ]);

  constructor() {}

  ngOnInit() {}
}
