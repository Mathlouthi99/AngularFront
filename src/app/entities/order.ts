import { User } from './user';
import { Address } from './Address';
import { OrderStatus } from './order-status';
import { OrderItem } from './order-item';




export class Order {
    id: number;
    user: User;
    installationDate: Date;
    status: OrderStatus;
    orderItems: OrderItem[];
    address: Address;
  }
  