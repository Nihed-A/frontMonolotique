import { Component, OnInit } from '@angular/core';
import {StorageService} from "../user_core/_services/storage.service";
import {UserService} from "../user_core/_services/user.service";
import {AuthService} from "../user_core/_services/auth.service";
import {User} from "../user_core/_models/user";
import {Image} from "../user_core/_models/image";
import {UploadimageService} from "../user_core/_services/uploadimage.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn = false;
  currentUser: any;
  user: User;
  image: Image | undefined

  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];

  constructor(private authService: AuthService,
              private storageService: StorageService,
              public UService: UserService,
              private uploadService: UploadimageService) {
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.currentUser = this.storageService.getUser();
    }
    this.GetUser();
    this.user = {
      Location: "",
      country: "",
      email: "",
      experienceYears: 0,
      forumStatus: undefined,
      id: 0,
      identifiant: "",
      kind: "",
      password: "",
      phoneNumber: "",
      professorDiploma: "",
      image:{id :"", data: new ArrayBuffer(length), name:"", type:''} ,
      studentLevel: "",
      studentSpeciality: undefined,
      token: "",
      tokenCreationDate: undefined,
      userName: "",
      verificationCode: "",
      verified: false
    }

  }

  GetUser() {
    this.UService.getUser(this.currentUser.id).subscribe(data => {
      console.log(data);
      this.user = data;
    }, err => {
      console.log(err);
    });
  }

  logout(): void {
    this.authService.logout().subscribe();
    this.storageService.clean();
  }


  getImageSrc(): string {
    if (this.user.image && this.user.image.type && this.user.image.data) {
      return `data:${this.user.image.type};base64,${this.user.image.data}`;
      console.log(this.user.image)
    } else {
      return '';
    }
  }
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }


  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(this.currentUser.id, file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        }});
    }
  }
}
