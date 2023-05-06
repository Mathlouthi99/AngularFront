import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../entities/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:9091/orders';

  constructor(private http: HttpClient) { }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${id}`);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/all`);
  }

  addOrder(order: Order, userId: number): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/add?user_id=${userId}`, order);
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(`${this.baseUrl}/${order.id}`, order);
  }

  getOrdersByUser(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/user/${userId}`);
  }

  selectInstallationDate(orderId: number, installationDate: Date): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/${orderId}/select-installation-date?installationDate=${installationDate.toISOString().slice(0,10)}`, {});
  }

  sendInstallationConfirmationEmail(orderId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${orderId}/send-installation-confirmation`, {});
  }

  updateOrderStatus(id: number, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/status`, { status });
  }
}
