import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-ticket-flow-main',
  templateUrl: './ticket-flow-main.component.html',
  styleUrls: ['./ticket-flow-main.component.css'],
})
export class TicketFlowMainComponent {
  selected!: Date | null;
}
