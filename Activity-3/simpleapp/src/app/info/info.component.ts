import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() name: any;
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  constructor() { }

  ngOnInit() {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  newInfo() {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"]
    this.selectedProduct = "Star Wars";
    console.log("In newInfo()and resetting Info");
  }

  onSubmit() {
    console.log("In onSubmit() with quantity of " + this.quantity + " and Movie selected is " + this.selectedProduct);
  }
}
