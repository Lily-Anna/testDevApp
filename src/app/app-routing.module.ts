import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { AuthGuard } from './services/auth-service/auth-guard';
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
