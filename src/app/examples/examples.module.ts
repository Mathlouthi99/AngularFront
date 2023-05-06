import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent, NgbdModalContent } from './checkout/checkout.component';


import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ListCategoryComponent } from './admin/list-category/list-category.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ProductsComponent } from './shop/products/products.component';
import { CartComponent } from './shop/cart/cart.component';
import { CategoryProductComponent } from './shop/category-product/category-product.component';
import { ProductbycatComponent } from './shop/productbycat/productbycat.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UpdateOrderComponent } from './admin/update-order/update-order.component';
import { ProductService } from 'app/services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { CategoryProductService } from 'app/services/category-product.service';
import { UpdateProductComponent } from './admin/updateproduct/update-product.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        BrowserModule
        
    ],
    providers: [ProductService, CategoryProductService],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        ListProductComponent,
        ListCategoryComponent,
        ProductsComponent,
        CartComponent,
        CategoryProductComponent,
        ProductbycatComponent,
        SingleProductComponent,
        DashboardComponent,
        SidebarComponent,
        OrdersComponent,
        UpdateOrderComponent,
        AddProductComponent,
        AddCategoryComponent,
        CheckoutComponent,
        UpdateProductComponent,
        CalendarComponent,
        NgbdModalContent // add the CalendarComponent here
    ],
    exports: [
        
        NgbdModalContent,
        CheckoutComponent
      ]
})
export class ExamplesModule { }
