import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { TopbarComponent } from './login/topbar/topbar.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';
import { OptomComponent } from './optom/optom.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { ReferralsTableComponent } from './referrals/referrals-table/referrals-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopbarComponent,
    LoginFormComponent,
    MenuComponent,
    OptomComponent,
    NavbarComponent,
    ReferralsComponent,
    ReferralsTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      {
        path: 'optom',
        component: OptomComponent,
        children: [
          {
            path: '',
            redirectTo: 'referrals',
            pathMatch: 'full',
          },
          {
            path: 'referrals',
            component: ReferralsComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
