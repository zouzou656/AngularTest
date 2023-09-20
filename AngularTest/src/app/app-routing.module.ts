import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'users-list', component: UsersListComponent },
  { path: 'user-info/:userId', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
