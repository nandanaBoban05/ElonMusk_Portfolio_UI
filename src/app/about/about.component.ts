import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {
  aboutDetails: any = {
    
  };

  constructor(private authService: AuthService, private aboutServices: AboutService) {}
  onSave(){
    this.aboutServices.saveAboutDetails(this.aboutDetails).subscribe((result:any) => {
    });

  }
  onLogout(){

  }

}
