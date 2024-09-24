// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { FormfreetimerComponent } from './seguridad/form-freetimer/form-freetimer.component';
import { AccountVerificationComponent } from './seguridad/account-verification/account-verification.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form-freetimer', component: FormfreetimerComponent},
  { path: 'account-verification', component: AccountVerificationComponent}
];
