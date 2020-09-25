import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-second-chart',
  templateUrl: './second-chart.component.html',
  styleUrls: ['./second-chart.component.css']
})
export class SecondChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart('secondChart', {
      type: 'line',
      title: 'Hours worked in technology per week in years',
      data: {
        labels: ['2016', '2017', '2019', '2020'],
        datasets: [
          {
            label: 'hours worked in C#',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'hours worked in JS',
            data: [3, 12, 5, 8, 1, 19],
            backgroundColor: [
              'rgba(132, 99, 255, 0.2)'
            ],
            borderColor: [
              'rgba(132, 99, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
