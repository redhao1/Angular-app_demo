import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives-component.component.html',
  styleUrls: ['./directives-component.component.css']
})
export class DirectivesComponentComponent {

  show = true;
  numbers = [
    1, 2, 3, 4, 5
  ];
  removeNum(n:number):void {
    var index = this.numbers.indexOf(n);
    if(index != null) {
      this.numbers.splice(index, 1);
    }
  }

}
