import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    const color1 = this.random_rgba();
    const color2 = this.random_rgba();
    const color3 = this.random_rgba();
    const color4 = this.random_rgba();
    const color5 = this.random_rgba();
    const color6 = this.random_rgba();
    const color7 = this.random_rgba();
    const color8 = this.random_rgba();

    const myChart = new Chart('polarAreaChart', {
      type: 'polarArea',
      title: 'Skill prediction',
      data: {
        labels: ['C#', 'CSS', 'HTML', 'SQL', 'Angular', 'Entity Framework', 'jQuery', 'JS'],
        datasets: [
          {
            label: 'How I feel in technologies',
            data: [
              this. random_number(),
              this. random_number(),
              this. random_number(),
              this. random_number(),
              this. random_number(),
              this. random_number(),
              this. random_number(),
              this. random_number()
            ],
            backgroundColor: [
              color1, color2, color3, color4, color5, color6, color7, color8
            ],
            borderColor: [
              color1, color2, color3, color4, color5, color6, color7, color8
            ],
            borderWidth: 1,
          }
        ]
      },
      options: {
        scale: {
          angleLines: {
            display: true,
            lineTenstion: 0
          },
          ticks: {
            suggestedMin: 1,
            suggestedMax: 50
          }
        }
      }
    });
  }
  random_number(): number {
    const o = Math.round;
    const r = Math.random;
    return o((r() + 1) * 100) / 5;
  }

  random_rgba(): string {
    const o = Math.round;
    const r = Math.random;
    const s = 255;
    return 'rgba(' + o((r() + 1) * s * 0.5) + ',' + o(r() * s) + ',' + o((r() + 1) * s * 2) + ',' + 1 + ')';
  }

}
