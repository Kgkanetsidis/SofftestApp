import { Component, OnInit } from '@angular/core';
import {IPayPalConfig,
  ICreateOrderRequest  } from 'ngx-paypal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CartService } from '../cart/service/cart.service';
import { UserOrderService } from '../order/service/user-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  products = [];
  total: number;
  shippingAddress: FormGroup;
  displayedColumns: string[] = ['imageUrl', 'productName', 'quantity', 'price', 'total'];
  public payPalConfig?: IPayPalConfig;
  constructor(private cartService: CartService,
              private orderService: UserOrderService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {

    this.shippingAddress = this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
    });
    this.cartService.getProductForCheckOut().subscribe((productList) => {
      this.products = productList;
      this.total = productList.map(p => p.quantity * p.price).reduce((total: any, price: any) =>
        total + price, 0
      );
    });
    // this.initConfig();
    this.placeOrder();
  }

  

  // private initConfig(): void {
  //   this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
  //     commit: true,
  //     client: {
  //       sandbox: ''
  //     },
  //     button: {
  //       label: 'paypal',
  //     },
  //     onPaymentComplete: (paymentInfo, actions) => {
  //       console.log('OnPaymentComplete');
  //       console.log(paymentInfo);
  //       console.log(actions);
  //       this.placeOrder(paymentInfo);
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel');
  //     },
  //     onError: (err) => {
  //       console.log('OnError');
  //       console.log(err);
  //     },
  //     transactions: [{
  //       amount: {
  //         currency: 'EUR',
  //         total: this.total
  //       }
  //     }]
  //   });
  // }

  // placeOrder(paymentData: any) {
      placeOrder() {
    const order = {
      products: this.products,
      shippingAddress: this.shippingAddress.getRawValue(),
      // paymentInfo: paymentData,
      total: this.total
    };
    this.orderService.placeOrder(order).subscribe((result) => {
      this.router.navigate(['/user/order', result.data]);
    });
  }
}
