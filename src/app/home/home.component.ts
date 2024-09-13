import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { ExperienceComponent } from '../experience/experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { EducationComponent } from "../education/education.component";
import { ExtracurricularComponent } from '../extracurricular/extracurricular.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillComponent, ExperienceComponent, ContactComponent, NavbarComponent, FooterComponent, EducationComponent,ExtracurricularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
