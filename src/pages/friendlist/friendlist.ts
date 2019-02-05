import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { FrienddeteilPage } from '../frienddeteil/frienddeteil';
import { Friend } from '../../model/friendmodel';

/**
 * Generated class for the FriendlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

    friends:Friend;
    major:String;

  constructor(private friendrest : FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.major=this.navParams.get("studetID");
   this.friendrest.getFriendList().subscribe(data=>{
    this.friends=data.filter (friend => friend.category === this.major);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendlistPage');
  }
  gotoBack(){
    this.navCtrl.pop();
  }
  showDetail(studentID:string){
    this.navCtrl.push(FrienddeteilPage,
      {studentID:studentID}
    );
  }


}
