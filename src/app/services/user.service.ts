import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUserDetails(): Observable<any> {
    return this.http.get('./assets/sample_data.json');
  }

  public updateUserDetails(userId: number): any {
    console.log('User Id ' + userId);
    // make a post call
  }

}
