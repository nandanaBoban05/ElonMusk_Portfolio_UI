import { Component,inject,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AboutService } from '../services/about.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [NgIf,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent{
  aboutDetails: any = {
    occupation:'',
    email:'',
    phone:''
  };
  aboutService = inject(AboutService);
  authService=inject(AuthService)
  router =inject(Router); 
  ngOnInit() {
    this.loadAboutDetails();
  }

  loadAboutDetails() {
    this.aboutService.getAboutDetails().subscribe((result: any) => {
      console.log('API response:', result); 
      if (result.length > 0) {
        this.aboutDetails = result[0];
      }
    }, error => {
      console.error('Error fetching about details', error);
    });
  }
  
    onEdit() {
    this.router.navigate(['/login']);
  }
}
