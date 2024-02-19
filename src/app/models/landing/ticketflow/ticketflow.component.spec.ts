import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketflowComponent } from './ticketflow.component';

describe('TicketflowComponent', () => {
  let component: TicketflowComponent;
  let fixture: ComponentFixture<TicketflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketflowComponent]
    });
    fixture = TestBed.createComponent(TicketflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
