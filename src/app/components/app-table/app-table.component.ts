import { Component, OnInit, Input, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent {

  @Input() tableHeaders: Array<String> = [];
  @Input() userDetailsArray: Array<UserDetails> = [];

  @Output() updateUserDetails: EventEmitter<number> = new EventEmitter();

  private _rowsPerPage: number = 10;
  public pages: Array<Array<UserDetails>> = [];
  public currentPage: number = 0;

  getValues(userDetails: UserDetails) {
    return userDetails ? Object.values(userDetails) : [];
  }

  onRowSizeChange(rowsPerPage: number) {
    this._rowsPerPage = rowsPerPage;
    this.currentPage = 0;
    this.pages = new Array(Math.ceil(this.userDetailsArray.length / rowsPerPage)).fill('').map((_, i) =>
      this.userDetailsArray.slice(i * rowsPerPage, i * rowsPerPage + rowsPerPage)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userDetailsArray && changes.userDetailsArray.currentValue) {
      // set the page size is 10 
      this.onRowSizeChange(this._rowsPerPage);
    }
  }

  getCurrentPageRecords() {
    return this.pages[this.currentPage];
  }

  nextPage() {
    this.currentPage += 1;
  }

  prevPage() {
    this.currentPage -= 1;
  }

  firstPage() {
    this.currentPage = 0;
  }

  lastPage() {
    this.currentPage = this.pages.length - 1;
  }
}
