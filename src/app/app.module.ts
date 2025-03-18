import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component'; 
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    AppComponent, 
    TaskListComponent,
    HeaderComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
