import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any[] = []; 

  projectService = inject(ProjectService);
  router = inject(Router);

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjectList().subscribe(
      (result: any[]) => {
        this.projects = result;
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );
  }
}
