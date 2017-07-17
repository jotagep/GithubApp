import { Component } from '@angular/core';
import { IonicPage ,NavController, NavParams } from 'ionic-angular';

import { GithubServiceProvider } from "../../providers/github-service/github.service";
import { User } from "../../modals/user.interface";
import { Repository } from "../../modals/repository.interface";

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  
  username:string;
  user: User;
  repositories: Repository[];

  constructor(private github: GithubServiceProvider ,private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInfo():void {
    this.github.mockGetUserInfo(this.username).subscribe(
      (data: User) => this.user = data,
    );
    this.github.mockGetRepoInfo(this.username).subscribe(
      (data: Repository[]) => this.repositories = data,
    )
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    this.getUserInfo();
  }

}
