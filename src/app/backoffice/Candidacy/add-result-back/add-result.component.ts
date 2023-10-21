import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/frontoffice/services/Candidacy/result.service';
import { Result } from 'src/app/models/CandidacyModule/Result.module';



@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss']
})
export class AddResultBackComponent implements OnInit {

  result: Result = new Result();
  submitted = false;

  constructor(private resultService: ResultService,
    private router: Router) { }

    map: any;

    ngOnInit() {
      
    }

  newEmployee(): void {
    this.submitted = false;
    this.result = new Result();
  }

  save() {
    this.resultService
      .createResult(this.result)
      .subscribe({
        next: data => {
          console.log(data);
          this.result = new Result();
          this.gotoList();
        },
        error: error => console.log(error)
      });
  }
  

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listresult']);
  }

  
  }
