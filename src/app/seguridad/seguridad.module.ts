import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormfreetimerComponent } from './form-freetimer/form-freetimer.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },{
    path: 'registro',
    component: RegisterComponent
  },{
    path: 'form-freetimer',
    component: FormfreetimerComponent
  },{
    path: 'account-verification', 
    component: AccountVerificationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SeguridadModule { }
