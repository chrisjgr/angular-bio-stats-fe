import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsCardsComponent } from './sensors-cards.component';

describe('SensorsCardsComponent', () => {
  let component: SensorsCardsComponent;
  let fixture: ComponentFixture<SensorsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
