import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { Alert } from 'src/app/models/alert';


@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.css']
})
export class AddAlertComponent implements OnInit {

  alert: Alert=new Alert();
  constructor(private alertService: AlertService, private router: Router) { }
  
  ngOnInit(): void {    
  }

  public isSelected:number=0;

  public check1(){
    this.isSelected =0
    console.log(this.isSelected);
  }
  public check2(){
    this.isSelected = 1
    console.log(this.isSelected);
  }

  public selecte:number=1;
  public selectCountry(){
    this.selecte=0;
    console.log(this.selecte);
  }
  public selectUniversity(){
    this.selecte=1;
    console.log(this.selecte);
  }
  public selectRegion(){
    this.selecte=2;
    console.log(this.selecte);
  }

  saveAlert(){
    if(this.isSelected==0){
        this.alert.alrtKind="SMS";
        this.alert.alrtEmail==undefined;
    }
    if(this.isSelected==1){
      this.alert.alrtKind="EMAIL";
      this.alert.alrtPhoneNumber==undefined;
    }
    if(this.selecte==0){
      this.alert.alrtTarget="COUNTRY";
    }
    if(this.selecte==1){
      this.alert.alrtTarget="OFFER_UNIVERSITE";
    }
    if(this.selecte==2){
      this.alert.alrtTarget="REGION";
    }
    this.alertService.createAlert(this.alert).subscribe(alert => {
    },
    error => {
      console.log(error);
    });
  }

  onSubmit() {
    console.log(this.alert);
    this.saveAlert();
    window.location.reload();
    console.log(this.alert.alrtKind);
    
  }

 onItemChange(e:any) {
  console.log(e.target.value);
}

}
