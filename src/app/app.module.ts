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
    ChildComponentComponent
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
