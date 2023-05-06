import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
    selector: 'app-modal-content',
    template: `
    
    `
})
export class NgbdModalContent implements OnInit {
    @Input() name: string; // add type to @Input property
    selectedDate: NgbDateStruct;
    installationDate: Date; // add installationDate property
    
    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}

    ngOnInit() {
        this.selectedDate = null; // set initial value for selectedDate
    }

    openDatePicker() {
        const modalRef = this.modalService.open(NgbDatepicker, { size: 'sm' });
        modalRef.result.then((result) => {
          if (result) {
            this.selectedDate = result;
            const formattedDate = this.selectedDate.day + '-' + this.selectedDate.month + '-' + this.selectedDate.year;
            const inputField = document.getElementById('selectedDateInput') as HTMLInputElement;
            inputField.value = formattedDate;
          }
        });
      }
      

      confirm() {
        const installationDate = new Date(
          this.selectedDate.year,
          this.selectedDate.month - 1,
          this.selectedDate.day
        );
        this.activeModal.close({ selectedDate: this.selectedDate, installationDate });
      }
    }
    


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    focus: any;
    focus1: any;
    selectedDate: NgbDateStruct;

    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
        modalRef.result.then((result) => {
            if (result && result.selectedDate) {
                this.selectedDate = result.selectedDate;
            }
        }).catch((error) => {
            if (error.message === 'Something went wrong') {
                console.log('There was an error: Something went wrong');
                // Handle the error here
            } else {
                throw error;
            }
        });
    }
    

    ngOnInit() {}
}
