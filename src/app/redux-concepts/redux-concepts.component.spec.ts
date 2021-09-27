import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxConceptsComponent } from './redux-concepts.component';

describe('ReduxConceptsComponent', () => {
  let component: ReduxConceptsComponent;
  let fixture: ComponentFixture<ReduxConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduxConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
