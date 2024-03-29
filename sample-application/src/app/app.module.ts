import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ThirdComponent } from './third/third.component';
import { AutocompleterComponent } from './autocomplete/autocomplete.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { EntityListenerComponent } from './entity-listener/entity-listener.component';
import { KillWidgetComponent } from './kill-widget/kill-widget.component';
import { MarketBuyNSellComponent } from './market-buy-nsell/market-buy-nsell.component';
import { SearchEntityWidgetComponent } from './search-entity-widget/search-entity-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    AutocompleterComponent,
    NotFoundComponent,
    WatchlistComponent,
    EntityListenerComponent,
    KillWidgetComponent,
    MarketBuyNSellComponent,
    SearchEntityWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
