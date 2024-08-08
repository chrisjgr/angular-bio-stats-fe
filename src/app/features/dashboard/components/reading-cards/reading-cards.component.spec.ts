import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingCardsComponent } from './reading-cards.component';

describe('ReadingCardsComponent', () => {
  let component: ReadingCardsComponent;
  let fixture: ComponentFixture<ReadingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
