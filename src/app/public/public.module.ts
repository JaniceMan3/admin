import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeModule } from './home/home.module';
@NgModule({
  imports: [
    PublicRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    HomeModule
  ],
  declarations: [
    PublicComponent,
  ],
})
export class PublicModule {
}
