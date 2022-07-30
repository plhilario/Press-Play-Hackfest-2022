import { Injectable } from '@angular/core';
import { schoolRegistration } from './schoolRegistration';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  schools: schoolRegistration[] = [];

  bookmarkSchool(schools: schoolRegistration) {
    if (this.schools.indexOf(schools) !== -1) {
      window.alert('The school has already been bookmarked!');
    } else {
      this.schools.push(schools);
      window.alert('Your school has been bookmarked!');
    }
  }
  
  removeSchool(school: schoolRegistration) {
		this.schools.splice(this.schools.indexOf(school), 1);
	}

  getBookmark() {
    	return this.schools;
  }
  
  constructor() { }
}
