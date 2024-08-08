import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  @ViewChild('child') child!:ChildComponentComponent

  message_parent:string = 'add message here';
  counter_parent:number = 0;

  receiveCounter($event:number) {
    this.counter_parent = $event;
  }

  text_parent:String = '';

  updateText():void {
    this.text_parent = this.child.text_child;
  }
}
