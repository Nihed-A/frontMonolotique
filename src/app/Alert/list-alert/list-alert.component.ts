import { Component, OnInit, Input, Output } from '@angular/core';
import { Alert } from 'src/app/models/alert';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-alert',
  templateUrl: './list-alert.component.html',
  styleUrls: ['./list-alert.component.css']
})
export class ListAlertComponent implements OnInit {

  constructor(private alertService: AlertService, private router:Router ) { }
  ngOnInit(): void {
    this.getAlertList();
  }

  public alerts:Alert[];
  private getAlertList(){
    this.alertService.getAlerts().subscribe(data => {this.alerts = data;
      console.log(this.alerts);
    })
  }

  deleteAlert(id: number){
    this.alertService.deleteAlert(id).subscribe(data =>{
      this.getAlertList;
    });
    window.location.reload();
  }

  @Input()  size: number;
  @Output() sizeChange :number;


  sendId(id:number){
    console.log(id);
  }

}