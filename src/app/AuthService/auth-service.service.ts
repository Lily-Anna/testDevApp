import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Здесь вы можете выполнить проверку учетных данных на сервере или использовать фиктивные данные для демонстрации
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
