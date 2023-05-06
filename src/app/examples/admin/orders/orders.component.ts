import { Component, OnInit } from '@angular/core';
import { Order } from 'app/entities/order';
import { OrderService } from 'app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit  {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    });
  }


}
