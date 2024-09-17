import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {path:'home',component:ContactComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {path:'contact',component:ContactComponent},
    { path: '', redirectTo: '/contact', pathMatch: 'full' },

    {path:'experience',component:ExperienceComponent},
    { path: '', redirectTo: '/experience', pathMatch: 'full' },

    {path:'skill',component:SkillComponent},
    { path: '', redirectTo: '/skill', pathMatch: 'full' },

    {path:'education',component:EducationComponent},
    { path: '', redirectTo: '/education', pathMatch: 'full' },

];
