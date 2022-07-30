import { Component, OnInit } from '@angular/core';
import { schoolRegistration } from '../../schoolRegistration';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
