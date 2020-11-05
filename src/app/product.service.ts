import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("/assets/data/products.json");
  }

  getProduct(id) {
    return this.getProducts();
  }
}
