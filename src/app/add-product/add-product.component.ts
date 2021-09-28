import { Route, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('productForm')  public addProductForm!: NgForm;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cancel(){
    console.log("test");
    this.router.navigate(["/products"]);
  }

}
