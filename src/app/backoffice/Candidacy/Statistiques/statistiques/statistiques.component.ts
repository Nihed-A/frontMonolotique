import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { StatistiquesService } from 'src/app/frontoffice/services/Candidacy/statistiques.service';




@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit, AfterViewInit {

  statistiques: any;
  chart: Chart;
  @ViewChild('chartCanvas') chartCanvas: ElementRef;

  constructor(private statistiquesService: StatistiquesService) {}

  ngOnInit() {
    this.statistiquesService.getNombreCandidaturesParDomaine()
      .subscribe(data => {
        this.statistiques = data;
      });
  }

  ngAfterViewInit() {
    this.generateChart();
  }

  generateChart() {
    const labels = Object.keys(this.statistiques);
    const values = Object.values(this.statistiques).map(value => Number(value));
  
    const chartCanvas = this.chartCanvas.nativeElement;
    const ctx = chartCanvas.getContext('2d');
  
    const chartConfig: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: labels,
        
        datasets: [{
          label: 'Nombre de candidatures',
          data: values,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            // Ajoutez d'autres couleurs si nécessaire
          ],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          borderAlign: 'inner'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    new Chart(ctx, chartConfig);
  }
}