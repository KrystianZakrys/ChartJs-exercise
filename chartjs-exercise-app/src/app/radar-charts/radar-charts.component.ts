import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-radar-charts',
  templateUrl: './radar-charts.component.html',
  styleUrls: ['./radar-charts.component.css']
})
export class RadarChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart('radarChart', {
      type: 'radar',
      title: 'Skill prediction',
      data: {
        labels: ['C#', 'CSS', 'HTML', 'SQL', 'Angular', 'Entity Framework', 'jQuery', 'JS'],
        datasets: [
          {
            label: 'How I feel in technologies',
            data: [40, 30, 35, 25, 20, 25, 35, 30],
            backgroundColor: [
              'rgba(132, 99, 255, 0.5)'
            ],
            borderColor: [
              'rgba(132, 99, 255, 1)'
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

}
