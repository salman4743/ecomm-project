import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularProducts: undefined | product[];
  trendyProducts: undefined | product[];
 

  constructor(private product:ProductService){}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit():void{
    this.product.popularProducts().subscribe((data)=>{
      // console.log(data);
      this.popularProducts=data
    });
    this.product.trendyProducts().subscribe((data)=>{
      // console.log(data);
      this.trendyProducts=data
      
    });

  }
}
