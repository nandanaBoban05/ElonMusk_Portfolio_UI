import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
export const routes: Routes = [
    {path:'home',component:ContactComponent},
    {path:'about',component:AboutComponent},
    { path: 'login', component: LoginComponent },
    { path: 'update', component: AboutComponent,}, 
    {path:'contact',component:ContactComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'skill',component:SkillComponent},
    {path:'education',component:EducationComponent},
    {path:'extracurricular',component:AboutComponent},
    {path:'project',component:ProjectComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];
