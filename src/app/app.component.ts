import { Component, ElementRef, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'myFirstApp';
  color = '';
  toast: any;

  constructor(private toastEle: ElementRef) {
  }

  ngAfterViewInit() {
    // Initialize the toast element
    const toastEl = this.toastEle.nativeElement.querySelector('.toast');
    this.toast = new bootstrap.Toast(toastEl);
  }

  showToast() {
    this.toast.show();
  }
}
