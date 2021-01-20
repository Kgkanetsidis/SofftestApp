import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCommonModule } from './common/common.module';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptorService } from './common/custom-interceptor/custom-interceptor.service';




@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    RouterModule.forRoot([]),
    CustomCommonModule,
    UserModule,
    AdminModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
