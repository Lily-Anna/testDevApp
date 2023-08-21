import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorageKey = 'user';

  constructor() { }

  public login(username: string, password: string): void {
    // Здесь можно добавить логику проверки введенных данных или обращение к API для авторизации
    const user = { username, password };
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  public logout(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  public getUser(): any {
    const userString = localStorage.getItem(this.localStorageKey);
    return userString ? JSON.parse(userString) : null;
  }

  public isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
