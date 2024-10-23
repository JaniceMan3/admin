import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { Banner } from '../../../admin/banner/banner.model';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-home-banner',
  styleUrls: ['./banner.component.scss'],
  templateUrl: './banner.component.html',
})
export class BannerHomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  banners: Banner[];

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
