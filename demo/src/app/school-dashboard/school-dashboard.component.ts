import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css']
})
export class SchoolDashboardComponent implements OnInit {

  curricularClassification = ['Grades 1 - 6', 'Grades 7 - 10', 
  'Kinder & Grades 1-6', 
  'Kinder & Grades 7-10', 
  'Grade 1-6 & Grades 7-10', 
  'Kinder, Grades 1-6, Grades 7-10', 
  'Kinder, Grades 1-6, Grades 7-10 attached to Tertiary', 
  'Grades 11-12', 
  'Kinder & Grades 11-12', 
  'Grades 1-6 & Grades 11-12', 
  'Kinder, Grades 1-6, Grades 7-10', 
  'Grades 7-10 & Grades 11-12', 
  'Grades 1-6, Grades 7-10, Grades 11-12', 
  'Kinder, Grades 1-6, Grades 7-10, Grades 11-12', 
  'Kinder, Grades 1-6, Grades 7-10, Grades 11-12 attached to Tertiary', 
  'Kinder, Grades 7-10 & Grades 11-12', 
  'Kinder, Grades 1-6, & Grades 11-12'];

  regions = ['Caloocan', 'Las Piñas', 'Makati', 'Malabon', 'Marikina',
  'Mandaluyong', 'Manila', 'Muntinlupa', 'Navotas', 'Valenzuela', 'Quezon City', 'Pasig',
  'San Juan', 'Pasay', 'Parañaque', 'Taguig'];

  enrollmentMethods = ['Annual', 'Semi-annual', 'Trimester', 'Quaraterly'];

  constructor() { }

  ngOnInit(): void {
  }

}
