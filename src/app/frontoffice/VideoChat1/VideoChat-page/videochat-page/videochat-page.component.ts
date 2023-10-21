import { Component, OnInit } from '@angular/core';
import { VideochatServiceService } from 'src/app/frontoffice/services/Candidacy/VideoChat/videochat-service.service';



@Component({
  selector: 'app-videochat-page',
  templateUrl: './videochat-page.component.html',
  styleUrls: ['./videochat-page.component.scss']
})
export class VideochatPageComponent implements OnInit {

  constructor(private videochatService: VideochatServiceService) {}

  ngOnInit() {
    this.videochatService.getVideochatPage().subscribe(
      (data) => console.log(data), // Afficher les données récupérées dans la console
      (error) => console.error(error) // Gérer les erreurs éventuelles
    );
  }
}

