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
  constructor(private authService: AuthService) {
    
  }

  ngOnInit() {
    this.buttonConfig = {} as ButtonConfig;

    if (this.authService.isLoggedIn()) { 
      this.buttonConfig.action = true;
      this.buttonConfig.text = "Выйти";

      this.name = 'Добро пожаловать, ' + this.authService.getUser().username;
    }else{
      this.name = 'Добро пожаловать, Гость! Авторизируйтесь пожалуйста! ';
      this.buttonConfig.action = false;
      this.buttonConfig.text = "Войти";
    }
    console.log(this.buttonConfig);
  }

  logout(): void {
    this.authService.logout();
  }
}
