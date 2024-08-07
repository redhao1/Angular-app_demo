import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesComponentComponent } from './directives-component.component';

describe('DirectivesComponentComponent', () => {
  let component: DirectivesComponentComponent;
  let fixture: ComponentFixture<DirectivesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesComponentComponent]
    });
    fixture = TestBed.createComponent(DirectivesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
