import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../model/friendmodel';


/*
  Generated class for the FriendrestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendrestProvider {

  private url:string="https://raw.githubusercontent.com/604234053CS/data/master/friend.json"

  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }

    getFriendList():Observable<any>{
      return this.http.get<Friend>(this.url);
    }
    getFriend(studentId:string):Observable<any>{
      return this.http.get<Friend>(this.url);
    }
}
