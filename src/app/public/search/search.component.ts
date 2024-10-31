import {Component, OnDestroy} from '@angular/core';
import { NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';
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
  selector: 'ngx-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  banners: Banner[];
  categories: Category[];
  products: Product[];
  paidAds: any[];
  menu: NbMenuItem[] = [
    {
      title: 'E-commerce',
      icon: 'shopping-cart-outline',
      link: '/admin/dashboard',
      home: true,
    },
  ]

  constructor(private sidebarService: NbSidebarService) {}

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

    this.products = [{
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 2",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: false,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 3",
      description: "",
      conditionId: "1",
      price: 3458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },{
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 2",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: false,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 3",
      description: "",
      conditionId: "1",
      price: 3458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },{
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 2",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: false,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 3",
      description: "",
      conditionId: "1",
      price: 3458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },{
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 2",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: false,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 3",
      description: "",
      conditionId: "1",
      price: 3458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },{
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 2",
      description: "",
      conditionId: "1",
      price: 3458.10,
      previousPrice: 4458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: false,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    },
    {
      id: "1",
      userId: "1",
      categoryId: "1",
      sub_categoryId: "1",
      brandId: "1",
      name: "Maquina de lavar roupa 14kg sper blaster 3",
      description: "",
      conditionId: "1",
      price: 3458.10,
      createdAt: new Date(),
      isActive: true,
      isPromoted: true,
      viewCount: 0,
      img_urls: [
        "https://img.olx.com.br/images/89/890461810585731.webp"
      ]
    }]

    this.paidAds = [1,1,1]
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
