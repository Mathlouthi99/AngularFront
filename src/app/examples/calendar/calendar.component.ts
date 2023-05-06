import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentMonth: HTMLElement;
  calendarDays: HTMLElement;
  today: Date = new Date();
  date: Date = new Date();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.currentMonth = document.querySelector('.current-month');
    this.calendarDays = document.querySelector('.calendar-days');
    this.currentMonth.textContent = this.date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
    this.today.setHours(0, 0, 0, 0);
    this.renderCalendar();
  }

  renderCalendar(): void {
    const prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    const totalMonthDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    const startWeekDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDay();
    this.calendarDays.innerHTML = '';
    let totalCalendarDay = 6 * 7;
    for (let i = 0; i < totalCalendarDay; i++) {
      let day = i - startWeekDay;
      if (i <= startWeekDay) {
        this.calendarDays.innerHTML += `${prevLastDay - i}`;
      } else if (i <= startWeekDay + totalMonthDay) {
        this.date.setDate(day);
        this.date.setHours(0, 0, 0, 0);
        let dayClass = this.date.getTime() === this.today.getTime() ? 'current-day' : 'month-day';
        this.calendarDays.innerHTML += `<span class="${dayClass}">${day}</span>`;
      } else {
        this.calendarDays.innerHTML += `${day - totalMonthDay}`;
      }
    }
  }

  changeMonth(direction: string): void {
    this.date = new Date(this.currentMonth.textContent);
    this.date.setMonth(this.date.getMonth() + (direction === 'next' ? 1 : -1));
    this.renderCalendar();
    this.currentMonth.textContent = this.date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
  }
}
