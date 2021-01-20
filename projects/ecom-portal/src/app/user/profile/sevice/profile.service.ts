import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { APP_CONFIG } from '../../../material-shared/AppConfig';
import { IAppConfig } from '../../../material-shared/IAppConfig';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private http: HttpClient,
    @inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getProfile() {
    return this.http.get(this.appConfig.apiEndPoint + '/user');
  }
}
