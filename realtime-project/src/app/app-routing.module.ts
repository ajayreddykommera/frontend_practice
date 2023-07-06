import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginSignupLayoutComponent } from './layouts/login-signup-layout/login-signup-layout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'submissions' },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  // },
  // {
  //   path: 'submissions',
  //   component:SubmissionsComponent ,
  // },
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'submissions',
        component: SubmissionsComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'submissions' },
    ],
  },
  {
    path: '',
    component: LoginSignupLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
