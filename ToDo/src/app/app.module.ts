import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';
import { CompletedCardsComponent } from './completed-cards/completed-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    MainPageComponent,
    TodoItemCardComponent,
    CompletedCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
