import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { BannerHomeComponent } from './banner/banner.component';
import { SharedModule } from '../@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ThemeModule,
    SharedModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    MdbCarouselModule
  ],
  declarations: [
    HomeComponent,
    BannerHomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
