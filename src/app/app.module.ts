import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BackendApiService } from './services/backend-api.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { OrganizationSetupHeaderComponent } from './Organization_Setup/organization-setup-header/organization-setup-header.component';
import { ZipmastersComponent } from './Organization_Setup/Setup/zipmasters/zipmasters.component';
import { HomeNewComponent } from './home-new/home-new.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { DefaultComponent } from './default/default.component';
import { ZipmastersCreateComponent } from './Organization_Setup/Setup/zipmasters-create/zipmasters-create.component';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

const appRoutes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: 'test', component: TestComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'zipmasters', component: ZipmastersComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,

    HomeComponent,
    HeaderComponent,
    OrganizationSetupHeaderComponent,
    ZipmastersComponent,
    HomeNewComponent,
    DefaultComponent,
    ZipmastersCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  providers: [AlertifyService, AuthService, BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
