import { LoginForm } from './../../models/LoginForm';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user';

  constructor() { }

  register(username: string, password: string): void {
    // Регистрация пользователя
    const user = { username, password };
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  login(username: string, password: string): boolean {
    // Проверка данных пользователя при входе
    const user = JSON.parse(localStorage.getItem(this.USER_KEY)!);
    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  public getUser(): LoginForm {
    const userString = localStorage.getItem(this.USER_KEY);
    return userString ? JSON.parse(userString) : null;
  }

  public isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
