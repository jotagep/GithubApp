import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';



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

  private baseUrl: string = 'http://api.github.com/users';
  private repoUrl: string = 'repos'

  constructor(private _http: Http) { }

  getUserInfo(username: string): Observable<User> {
    return this._http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError)
  }

  getRepoInfo(username: string): Observable<Repository[]> {
    return this._http.get(`${this.baseUrl}/${username}/${this.repoUrl}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError)
  }
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

  private handleError(error: Response | any) {
    return Observable.throw(error.json().error || 'Serve error.');
  }

  private extractData(res: Response) {
    return res.json();
  }

  private logData(res: Response) {
    return console.log(res);
  }
}
