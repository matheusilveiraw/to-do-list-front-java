import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component'; 
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component'; 
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent, 
    TaskListComponent,
    HeaderComponent,
    TodoItemComponent,
    LoadingComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
