import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';
@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  username: string;

  constructor(private authService: AuthService) {
    this.username = 'admin'; // Здесь вы можете получить имя пользователя с сервера
  }

  logout(): void {
    this.authService.logout();
  }
}
