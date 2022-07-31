import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  regions = ['Caloocan', 'Las Piñas', 'Makati', 'Malabon', 'Marikina',
  'Mandaluyong', 'Manila', 'Muntinlupa', 'Navotas', 'Valenzuela', 'Quezon City', 'Pasig',
  'San Juan', 'Pasay', 'Parañaque', 'Taguig'];

  relation = ['Father', 'Mother', 'Guardian'];

  constructor() { }

  ngOnInit(): void {
  }

}
