import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { Friend } from '../../model/friendmodel';

/**
 * Generated class for the FrienddeteilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-frienddeteil',
  templateUrl: 'frienddeteil.html',
})
export class FrienddeteilPage {

    studentID:string;
    friend:Friend;

  constructor(public friendrest:FriendrestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrienddeteilPage');
  }
  ionViewWillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.friendrest.getFriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentID === this.studentID)[0];
     });

  }
  gotoBack(){
    this.navCtrl.pop();
  }
}
