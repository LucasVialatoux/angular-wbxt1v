import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Shipping {
  type: string;
  price: number;
}

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  shippingUrl = "assets/config.json";

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
  constructor(private http: HttpClient) {}
}
