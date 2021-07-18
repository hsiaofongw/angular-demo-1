import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayCardComponent } from './say-card.component';

describe('SayCardComponent', () => {
  let component: SayCardComponent;
  let fixture: ComponentFixture<SayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
