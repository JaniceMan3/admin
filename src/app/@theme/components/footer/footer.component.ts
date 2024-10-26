import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    © DesapeGrow.Todos os direitos reservados.
     </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-instagram"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
