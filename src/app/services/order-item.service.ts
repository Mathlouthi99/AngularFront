import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from '../entities/order-item';


@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  private baseUrl = 'http://localhost:9091/order-item';

  constructor(private http: HttpClient) { }

  add(item: OrderItem, orderId: number): Observable<any> {
    const url = `${this.baseUrl}/add?orderId=${orderId}`;
    return this.http.post(url, item);
  }

  update(item: OrderItem): Observable<any> {
    const url = `${this.baseUrl}/update`;
    return this.http.put(url, item);
  }

  getAll(): Observable<OrderItem[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<OrderItem[]>(url);
  }

  getById(id: number): Observable<OrderItem> {
    const url = `${this.baseUrl}/get/${id}`;
    return this.http.get<OrderItem>(url);
  }

  remove(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
