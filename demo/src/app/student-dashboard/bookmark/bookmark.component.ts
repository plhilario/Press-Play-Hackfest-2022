import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../bookmark.service';
import { schoolRegistration } from '../../schoolRegistration';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  schools = this.bookmarkService.getBookmark();
  removeProduct(school: schoolRegistration) {
		this.bookmarkService.removeSchool(school);
  }
  
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
  }

}
