import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  public userDetailsArray: Observable<Array<any>>;

  public tableHeaders = ['Name', 'Phone', 'Email', 'Company', 'Date Entry', 'Org Num',
    'Address 1', 'City', 'Zip', 'Geo', 'Pan', 'Pin', 'Id', 'Status', 'Fee', 'Guid',
    'Date Exit', 'Date First', 'Date Recent', 'URL', ''];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userDetailsArray = this.userService.getUserDetails();
  }

  updateUserDetails(userId: number) {
    this.userService.updateUserDetails(userId);
  }
}
