import { Component } from '@angular/core';
import { UserService } from './user-service.service';
import { User } from 'src/app/Models/User';
import { catchError, shareReplay } from 'rxjs';
import { OverlayService } from '../loader-overlay/overlay.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent  {
  users: Array<User> =[];
  currentPage = 1;
  totalPages=0;
  searchQuery = '';
  searchedUser: any | null = null;
  filteredUsers: any[] = []; // To store filtered user cards

  constructor(private userService: UserService,private overlayService: OverlayService) { }

  ngOnInit(): void {
    this.getUsers(this.currentPage);
  }
  getUsers(page:number): void {
    this.overlayService.open();
    setTimeout(()=>2000);
    this.userService.getUsers(page)
      .subscribe(response => {
        console.log(1);
        
        this.users = response.data;
        console.log(this.users);
        
        this.filteredUsers = this.users;
        this.totalPages=response.total_pages;
          this.overlayService.close();

        shareReplay({ bufferSize: 1, refCount: true }),catchError(error => captureException(error));

        
      });
  }
  searchUser(): void {
    this.filterUsers();
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {

      return user.id.toString().includes(this.searchQuery);
    });
    this.searchedUser = this.filteredUsers.length > 0 ? this.filteredUsers[0] : null;
  }

}
function captureException(error: any): any {
  throw new Error('Function not implemented.');
}

