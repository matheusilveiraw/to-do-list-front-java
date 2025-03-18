import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from 'src/app/components/header/header.component'; 


@NgModule({
  declarations: [
    AppComponent, 
    TaskListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
