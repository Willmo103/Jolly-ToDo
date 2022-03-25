import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCardsComponent } from './completed-cards.component';

describe('CompletedCardsComponent', () => {
  let component: CompletedCardsComponent;
  let fixture: ComponentFixture<CompletedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
