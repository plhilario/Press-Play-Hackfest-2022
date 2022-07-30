import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { schoolRegistration } from '../schoolRegistration';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.component.html',
  styleUrls: ['./school-profile.component.css']
})
export class SchoolProfileComponent implements OnInit {

  schoolRegistration: schoolRegistration | undefined;

  bookmarkSchool(schoolRegistration: schoolRegistration) {
    this.bookmarkService.bookmarkSchool(schoolRegistration);
  }

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
  }

}
