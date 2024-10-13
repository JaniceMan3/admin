import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, 
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule,
  NbListModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SubCategoryRoutingModule, routedComponents } from './sub-category-routing.module';
import { FormsModule } from '@angular/forms';
import { SubCategoryService } from './sub-category.service';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    SubCategoryRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbListModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    SubCategoryService,
  ],
})
export class SubCategoryModule { }
