import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  regions = ['Caloocan', 'Las Pi�as', 'Makati', 'Malabon', 'Marikina',
  'Mandaluyong', 'Manila', 'Muntinlupa', 'Navotas', 'Valenzuela', 'Quezon City', 'Pasig',
  'San Juan', 'Pasay', 'Para�aque', 'Taguig'];

  relation = ['Father', 'Mother', 'Guardian'];

  constructor() { }

  ngOnInit(): void {
  }

}
