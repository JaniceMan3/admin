import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PaidAds } from '../../../admin/paidAds/paidAds';


@Component({
  selector: 'ngx-home-product',
  templateUrl: './paidAds.component.html',
  styleUrls: ['./paidAds.component.css']
})
export class paidAdsComponent implements OnInit, OnDestroy{
  private destroy$: Subject<void> = new Subject<void>();
  @Input() product: PaidAds;
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() highlight: string = ''; // Ex: "Destaque"
  @Input() items: string[] = []; // Lista de itens

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}