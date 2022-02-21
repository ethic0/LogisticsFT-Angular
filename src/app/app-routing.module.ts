import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboaradComponent } from './dashboarad/dashboarad.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboaradComponent,canActivate:[AuthGuard]
  },
  {path:"**",
  component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
