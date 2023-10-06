import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LoginUserComponent } from './login/login-user/login-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login-admin',component:LoginAdminComponent},
  {path:'login-user',component:LoginUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
