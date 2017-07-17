import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../../modals/user.interface';
import { Repository } from "../../modals/repository.interface";

import { USER_LIST } from '../../mocks/user.mocks';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks'


/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  /*
  Finding the repositories from within REPOSITORY_LIST, owner equal to username passed in.
  Returning the results as an Observable.
  */
  mockGetRepoInfo(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }
  /*
  Finding the user from within USER_LIST, equal to username passed in.
  Returning the results as an Observable.
  */
  mockGetUserInfo(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
