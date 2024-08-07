import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponentComponent } from './data-binding-component.component';

describe('DataBindingComponentComponent', () => {
  let component: DataBindingComponentComponent;
  let fixture: ComponentFixture<DataBindingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingComponentComponent]
    });
    fixture = TestBed.createComponent(DataBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
