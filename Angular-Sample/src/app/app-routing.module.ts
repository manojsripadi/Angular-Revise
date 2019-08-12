import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';
import { AuthGuard } from './utils/guard/auth-guard.service';


const routes: Routes = [
  {path:'users', component: UsersComponent},
  {path:'user/:id', component: UserComponent, canActivate: [AuthGuard]},
  {path:'', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
