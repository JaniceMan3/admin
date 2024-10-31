import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbRadioModule,
  NbSelectModule,
  NbSidebarModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { FormsModule } from '@angular/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ThemeModule } from '../../@theme/theme.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [
    SearchRoutingModule,
    SharedModule,
    FormsModule,
    ThemeModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
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
    MdbCarouselModule,
    
  ],
  declarations: [
    SearchComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
