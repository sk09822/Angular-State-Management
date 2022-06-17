import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './component/counter/counter.component';
import { CounterOutputComponent } from './component/counter-output/counter-output.component';
import { CounterButtonsComponent } from './component/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './component/counter/state/counter.reducer';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter:counterReducer})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
