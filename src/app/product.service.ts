import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  constructor() {}

  getProducts() {
    return [
      {
        productId: 1,
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens"
      },
      {
        productId: 2,
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras"
      },
      {
        productId: 3,
        name: "Phone Standard",
        price: 299,
        description: ""
      }
    ];
  }

  getProduct(id) {
    return this.getProducts().find(item => (item.productId = id));
  }
}
