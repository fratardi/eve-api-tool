import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleterComponent } from './autocomplete/autocomplete.component';
import { FirstComponent } from './first/first.component';
import { MarketBuyNSellComponent } from './market-buy-nsell/market-buy-nsell.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  { path: '', component: MarketBuyNSellComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'esi_callback', component: SecondComponent},
 // { path: 'autocompleter', component: AutocompleterComponent},
  //{ path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }