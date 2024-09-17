import { Component,inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AboutService } from '../services/about.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [NgIf,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  aboutDetails: any = {
    Occupation:'',
    Email:'',
    Phone:''
  };

  aboutService = inject(AboutService);
  authService=inject(AuthService)
  router =inject(Router); 
  
  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.aboutService.getAboutDetails().subscribe((details: any) => {
        this.aboutDetails = details;
      });
    }
  }
  

  onSave(){
    this.aboutService.updateAboutDetails(this.aboutDetails).subscribe((result:any) => {
      console.log('Details updated:',result);
      alert("successful");
    });

  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login'])

  }

}
