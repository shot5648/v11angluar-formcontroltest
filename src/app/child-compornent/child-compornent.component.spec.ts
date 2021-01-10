import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompornentComponent } from './child-compornent.component';

describe('ChildCompornentComponent', () => {
  let component: ChildCompornentComponent;
  let fixture: ComponentFixture<ChildCompornentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompornentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompornentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
