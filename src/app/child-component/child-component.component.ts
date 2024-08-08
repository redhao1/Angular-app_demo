import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  counter_child:number = 0;
  text_child:string = 'text from child';
  @Input()
  message_child:string = '';

  @Output()
  counterEvent = new EventEmitter<number>();

  increaseCounter():void {
    this.counter_child++;
    this.counterEvent.emit(this.counter_child);
  }

  decreaseCounter():void {
    this.counter_child--;
    this.counterEvent.emit(this.counter_child);
  }
}
