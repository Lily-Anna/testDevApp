import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { AuthGuard } from './AuthService/auth-guard';
import { PostPageComponent } from './post-page/post-page.component';
const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'posts', component: PostsPageComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostPageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
