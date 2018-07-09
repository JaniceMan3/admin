import {Component, ViewChild} from '@angular/core';
import { OrdersChartComponent } from './charts/orders-chart.component';
import { ProfitChartComponent } from './charts/profit-chart.component';
import { OrdersChartService, OrdersChart } from '../../../@core/data/orders-chart.service';
import { ProfitChartService, ProfitChart } from '../../../@core/data/profit-chart.service';

@Component({
  selector: 'ngx-ec-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class EcChartsPanelComponent {
  period: string = 'week';
  ordersChartData: OrdersChart;
  profitChartData: ProfitChart;

  @ViewChild('ordersChart') ordersChart: OrdersChartComponent;
  @ViewChild('profitChart') profitChart: ProfitChartComponent;

  constructor(private ordersChartService: OrdersChartService,
              private profitChartService: ProfitChartService) {
    this.getOrdersChartData(this.period);
    this.getProfitChartData(this.period);
  }

  setPeriod(value: string): void {
    this.getOrdersChartData(value);
    this.getProfitChartData(value);
    this.period = value;
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Profit') {
      this.profitChart.resizeChart();
    } else {
      this.ordersChart.resizeChart();
    }
  }

  getOrdersChartData(period: string) {
    this.ordersChartService.getOrdersChartData(period)
      .subscribe(ordersChartData => {
        this.ordersChartData = ordersChartData;
      });
  }

  getProfitChartData(period: string) {
    this.profitChartService.getProfitChartData(period)
      .subscribe(profitChartData => {
        this.profitChartData = profitChartData;
      });
  }
}