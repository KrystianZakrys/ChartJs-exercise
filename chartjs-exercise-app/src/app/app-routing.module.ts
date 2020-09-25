import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { RadarChartsComponent } from './radar-charts/radar-charts.component';
import { SecondChartComponent } from './second-chart/second-chart.component';

const routes: Routes = [
  {path: '', redirectTo: '/bar', pathMatch: 'full'},
  {path: 'bar', component: BarChartsComponent},
  {path: 'second', component: SecondChartComponent},
  {path: 'radar', component: RadarChartsComponent},
  {path: 'polar-area', component: PolarAreaChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
