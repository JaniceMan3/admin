import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  template: './promotion-detail.component.html',
  styleUrls: ['promotion-detail.component.scss'],
})
export class PromotionDetailComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
