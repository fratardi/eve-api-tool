import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SecondComponent } from './second/second.component';
import { SecureComponent } from './secure/secure.component';



const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: '**', component: SecondComponent },

  { path: '', redirectTo: 'secure', pathMatch: 'full' },
  { path: 'secure', canActivate: [ AuthGuard ], component: SecureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }

 // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
