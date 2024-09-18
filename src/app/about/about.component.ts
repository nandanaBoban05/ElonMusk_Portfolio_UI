import { Component,inject } from '@angular/core';
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
    Occupation:'',
    Email:'',
    Phone:''
  };
  aboutService = inject(AboutService);
  authService=inject(AuthService)
  router =inject(Router); 
  
  onEdit(){
    // this.aboutService.getAboutDetails(this.aboutDetails).subscribe((result:any)=>{
    //    this.aboutDetails=result;
    // });
    this.router.navigate(['/login'])

  }

}
