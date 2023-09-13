import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFlowMainComponent } from './ticket-flow-main.component';

describe('TicketFlowMainComponent', () => {
  let component: TicketFlowMainComponent;
  let fixture: ComponentFixture<TicketFlowMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketFlowMainComponent]
    });
    fixture = TestBed.createComponent(TicketFlowMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
