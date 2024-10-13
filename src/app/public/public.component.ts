import { Component } from '@angular/core';

import { MENU_ITEMS } from './public-menu';

@Component({
  selector: 'ngx-public',
  styleUrls: ['public.component.scss'],
  template: `
    <ngx-one-column-layout [menu]="false">
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PublicComponent {
  menu = MENU_ITEMS;
}
