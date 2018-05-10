import { TipoContactoRoutingModule, routedComponents } from './tipo_contacto-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PersonaService } from '../../@core/data/persona.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudTipoContactoComponent } from './crud-tipo_contacto/crud-tipo_contacto.component';

@NgModule({
  imports: [
    ThemeModule,
    TipoContactoRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    PersonaService,
  ],
  exports: [
    CrudTipoContactoComponent,
  ],
})
export class TipoContactoModule { }
