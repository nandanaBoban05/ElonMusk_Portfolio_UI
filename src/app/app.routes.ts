import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
export const routes: Routes = [
    {path:'home',component:ContactComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'contact',component:ContactComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'skill',component:SkillComponent},
    {path:'education',component:EducationComponent},
];
