import { Component } from '@angular/core';

@Component({
  selector: 'app-ticketflow',
  templateUrl: './ticketflow.component.html',
  styleUrls: ['./ticketflow.component.css'],
})
export class TicketflowComponent {
  images: string[] = [
    'assets\\img\\TicketFlowdAdmin.png',
    'assets\\img\\TicketFlow\\Employees.png',
    'assets\\img\\TicketFlow\\Desktop Login.png',

    'assets\\img\\TicketFlow\\nextTicket.png',
    'assets\\img\\TicketFlow\\userflow.png',
    'assets\\img\\TicketFlow\\relations.png',
  ];

  currentIndex: number = 0;

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrev() {
    this.currentIndex =
      (this.currentIndex + this.images.length - 1) % this.images.length;
  }
}
