import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  localStorageKey = 'users';

  constructor() { }

  getUsers(): User[] {
    const usersData = localStorage.getItem(this.localStorageKey);
    return usersData ? JSON.parse(usersData) : [];
  }

  addUser(user: User): void {
    const users = this.getUsers();
    user.id = new Date().getTime(); // Simple unique id generation
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  updateUser(user: User): void {
    const users = this.getUsers();
    const index = users.findIndex((u) => u.id === user.id);
    if (index > -1) {
      users[index] = user;
      localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    }
  }

  deleteUser(id: number): void {
    let users = this.getUsers();
    users = users.filter((u) => u.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }
}
