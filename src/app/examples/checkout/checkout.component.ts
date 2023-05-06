import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'app/entities/cart-item';
import { Product } from 'app/entities/product';
import { CartService } from 'app/services/cart.service';
import { ProductService } from 'app/services/product.service';
import { NgbModal, NgbActiveModal, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { OrderService } from 'app/services/order.service';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';




@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Modal title</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <div class="container py-5">
            <header class="text-center"></header>
        </div> <div class="input-group">
        <input class="form-control" placeholder="yyyy-mm-dd" name="dp" [(ngModel)]="selectedDate" ngbDatepicker #d="ngbDatepicker">
       <div class="input-group-append">

<button class="fa fa-calendar" (click)="d.toggle()" type="button"></button>        </div>

</div>
<style>
  .calendar-icon {
    position: relative;
    top: -35px;
    right: -110px;
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: #f5f5f5;
  }
  .calendar-icon:before {
    content: "\f073";
    font-family: "Font Awesome 5 Free";
    font-size: 18px;
    color: #555555;
  }
</style>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" routerlink="/orders" (click)="confirm()">Confirm</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.dismiss('Close click')">Exit</button>
        </div>
    </div>
    `
})

  export class NgbdModalContent implements OnInit {
    @Input() name: string; // add type to @Input property
    selectedDate: NgbDateStruct;
    
    constructor(public activeModal: NgbActiveModal, private orderService: OrderService) {}

    ngOnInit() {
        this.selectedDate = null; // set initial value for selectedDate
    }

    confirm() {
        const installationDate = new Date(
            this.selectedDate.year,
            this.selectedDate.month - 1,
            this.selectedDate.day
        );
        const orderId = 1; // replace with your order ID
        this.orderService.selectInstallationDate(orderId, installationDate).subscribe({
            next: (order) => {
                this.activeModal.close({ selectedDate: this.selectedDate, installationDate });
            },
            error: (error) => {
                console.log(error);
                // handle error here
            }
        });
            }
    
    
}
    
    



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '{}');
  // localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  product: Product = new Product();
  files: any = [];
  id!: number;

  selectedDate: NgbDateStruct;

  constructor(private modalService: NgbModal) {}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

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

}
