import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { IUser } from './user';
import {IResponse} from './loginResponse';

import {environment} from '../../../environments/environment';
import {APP_CONFIG} from '../../material-shared/AppConfig';
import {IAppConfig} from '../../material-shared/IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
     @Inject(APP_CONFIG) private appConfig: IAppConfig) { 
       console.log(appConfig.apiEndPoint);
     }


login(user: IUser) {
  return this.http.post<IResponse>(environment.apiEndPoint + '/user/login', user);
}

}
