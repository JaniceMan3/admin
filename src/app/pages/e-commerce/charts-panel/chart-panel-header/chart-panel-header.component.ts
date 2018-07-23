import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { NgxLegendItemColor } from '../../legend-chart/enum.legend-item-color';

@Component({
  selector: 'ngx-chart-panel-header',
  styleUrls: ['./chart-panel-header.component.scss'],
  templateUrl: './chart-panel-header.component.html',
})
export class ChartPanelHeaderComponent implements OnDestroy {

  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';
  types: string[] = ['week', 'month', 'year'];

  chartLegend = [
    {
      iconColor: NgxLegendItemColor.GREEN,
      title: 'Payment',
    },
    {
      iconColor: NgxLegendItemColor.PURPLE,
      title: 'Canceled',
    },
    {
      iconColor: NgxLegendItemColor.LIGHT_PURPLE,
      title: 'All orders',
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
