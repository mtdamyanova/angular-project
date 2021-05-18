import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectedItemsComponent } from './selected-items/selected-items.component';
import { ItemsComponent } from './items/items.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  declarations: [				
    AppComponent,
      SelectedItemsComponent,
      ItemsComponent,
      UserInputComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
