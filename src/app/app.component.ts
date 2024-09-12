import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { ExperienceComponent } from './experience/experience.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent,ExperienceComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elonmusk_portfolio';
}
