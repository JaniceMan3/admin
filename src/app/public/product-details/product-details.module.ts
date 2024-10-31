import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { FormsModule } from '@angular/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
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
    ProductDetailsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailsModule { }
