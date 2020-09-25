import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { SecondChartComponent } from './second-chart/second-chart.component';
import { RadarChartsComponent } from './radar-charts/radar-charts.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartsComponent,
    SecondChartComponent,
    RadarChartsComponent,
    PolarAreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
