import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCompornentComponent } from './person-compornent.component';

describe('PersonCompornentComponent', () => {
  let component: PersonCompornentComponent;
  let fixture: ComponentFixture<PersonCompornentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCompornentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCompornentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
