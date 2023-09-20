import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageregisterComponentComponent } from './pageregister-component.component';

describe('PageregisterComponentComponent', () => {
  let component: PageregisterComponentComponent;
  let fixture: ComponentFixture<PageregisterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageregisterComponentComponent]
    });
    fixture = TestBed.createComponent(PageregisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
