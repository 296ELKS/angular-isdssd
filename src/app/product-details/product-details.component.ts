import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.productService.getProduct(params.get("productId"));
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart");
  }
}
