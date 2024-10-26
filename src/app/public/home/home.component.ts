import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { Banner } from '../../admin/banner/banner.model';
import { Subject } from 'rxjs';
import { Category } from '../../admin/category/category.model';
import { Product } from '../../admin/product/product';
import { PaidAds } from '../../admin/paidAds/paidAds';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  banners: Banner[];
  categories: Category[];
  products: any[];
  paidAds: any[];

  constructor() {}

  ngOnInit(): void {
    console.log('init');

    this.categories = [
    {
        "name": "Iluminação",
        "id": "Iluminacao",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-lightbulb"
    },
    {
        "name": "Exaustores/Filtros",
        "id": "Exaustores",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-fan"
    },
    {
        "name": "Estufas",
        "id": "Estufas",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-home"
    },
    {
        "name": "Medidores",
        "id": "Medidores",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-thermometer"
    },
    {
        "name": "Acessórios",
        "id": "Acessorios",
        "updatedAt": new Date(),
        "createdAt": new Date(),
        "icon": "fa-scissors"
    },
    {
      "name": "Outros",
      "id": "Outros",
      "updatedAt": new Date(),
      "createdAt": new Date(),
      "icon": "fa-spider"
  }    
    
    ]

    this.products = [1,1,1,1,1,1]

    this.paidAds = [1,1,1]
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
