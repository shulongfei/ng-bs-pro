import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component'
// import { AuthGuard } from '../core/login-guard.service';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  // canActivate: [AuthGuard],
  // canActivateChild: [AuthGuard],
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  ]

  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
