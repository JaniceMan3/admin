import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { NgdLEgendItemColor } from '../../legend-chart/enum.legend-item-color';

@Component({
  selector: 'ngx-chart-header',
  styleUrls: ['./charts-header.component.scss'],
  templateUrl: './charts-header.component.html',
})
export class ChartsHeaderComponent implements OnDestroy {
  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';
  types: string[] = ['week', 'month', 'year'];

  chartLegend = [
    {
      iconColor: NgdLEgendItemColor.GREEN,
      title: 'All orders',
    },
    {
      iconColor: NgdLEgendItemColor.PURPLE,
      title: 'Payment',
    },
    {
      iconColor: NgdLEgendItemColor.BLUE,
      title: 'Canceled',
    },
  ];

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}