import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';



const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'esi_callback', component: SecondComponent},
  { path: 'third-component', component: ThirdComponent },
  //{ path: '**', redirectTo: '404' },
  { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
9