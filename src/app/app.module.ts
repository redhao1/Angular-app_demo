import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonChildComponent } from './button-child/button-child.component';
import { DataBindingComponentComponent } from './data-binding-component/data-binding-component.component';
import { CounterComponent } from './counter/counter.component';
import { DirectivesComponentComponent } from './directives-component/directives-component.component';
import { HighlightDirective } from './highlight.directive';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TodoTableComponent } from './todo-table/todo-table.component'
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReversePipe } from './reverse.pipe';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonChildComponent,
    DataBindingComponentComponent,
    CounterComponent,
    DirectivesComponentComponent,
    HighlightDirective,
    ParentComponentComponent,
    ChildComponentComponent,
    TodoTableComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ReversePipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
