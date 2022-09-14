import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondComponent } from './second/second.component';



const routes: Routes = [
  { path: 'first-component', component: FirstComponent },

  // { path: '404', component: NotFoundComponent },
  { path: '**', component: SecondComponent},

 // { path: '**', redirectTo: '404' }

 { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
