// demo-1
// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
// import { User } from '../../models/user';

// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css'],
// })
// export class UserListComponent implements OnInit {
//   users: User[] = [];

//   constructor(private userService: UserService) { }

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   loadUsers(): void {
//     this.users = this.userService.getUsers();
//   }

//   deleteUser(id: number): void {
//     this.userService.deleteUser(id);
//     this.loadUsers();
//   }
// }



// demo-2
// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = ''; // Search term variable

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  // Function to filter users based on the search term
  filteredUsers(): User[] {
    if (!this.searchTerm) {
      return this.users; // If no search term, return all users
    }
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.users = this.users.filter((user) => user.id !== id);
  }
}
