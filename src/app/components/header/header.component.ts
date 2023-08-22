import { ButtonConfig } from './../../models/ButtonConfig';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Тестовое задание';
  buttonConfig!: ButtonConfig;
  name!: string;
  action!:string;
  isLogin!: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.buttonConfig.text = "Выйти";
      this.buttonConfig.color = "";
      this.name = 'Добро пожаловать, ' + this.authService.getUser().username;
    }else{
      this.name = 'Добро пожаловать, Гость! Авторизируйтесь пожалуйста! ';
      this.buttonConfig.color = "primary";
      this.buttonConfig.text = "Войти";
    }
  }
  logout(): void {
    this.authService.logout();
  }
}
