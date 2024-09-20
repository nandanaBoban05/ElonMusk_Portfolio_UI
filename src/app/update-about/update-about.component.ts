import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../services/about.service';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-about.component.html',
  styleUrl: './update-about.component.css'
})
export class UpdateAboutComponent implements OnInit {

  updateDetail: any = {
    occupation: '',
    email: '',
    phone: '',
  };
 
  aboutService = inject(AboutService);
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    this.loadAboutDetails();
  }

  loadAboutDetails() {
    this.aboutService.getAboutDetails().subscribe((result: any) => {
      console.log('Loaded details:', result);
      if (result.length > 0) {
        this.updateDetail = result[0];  // Assuming the API response is an array
      }
    }, error => {
      console.error('Error fetching details', error);
    });
  }

  // Save the updated details
  onSave() {
    this.aboutService.updateAboutDetails(this.updateDetail).subscribe((result: any) => {
      console.log('Details updated:', result);
      alert('Details updated successfully');
    });
  }

  // Logout and navigate to the about page
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/about']);
  }
}
