import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ZipmastersComponent } from './Organization_Setup/Setup/zipmasters/zipmasters.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: '', component: DefaultComponent,
  children: [
    { path: 'zipmasters', component: ZipmastersComponent },
    { path: 'home', component:HomeComponent},

  { path: 'home-new', component: HomeNewComponent},

  ]


},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
