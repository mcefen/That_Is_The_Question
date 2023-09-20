import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoginregisterComponent } from './component-loginregister.component';

describe('ComponentLoginregisterComponent', () => {
  let component: ComponentLoginregisterComponent;
  let fixture: ComponentFixture<ComponentLoginregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentLoginregisterComponent]
    });
    fixture = TestBed.createComponent(ComponentLoginregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
