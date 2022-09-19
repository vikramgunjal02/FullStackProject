import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../IProperty.interface';
import { HousingService } from './../../services/housing.service';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties?: IProperty[];
  constructor(private hs: HousingService, private route:ActivatedRoute) {}

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }

    this.hs.getAllProperties(this.SellRent).subscribe(data=>{
      this.properties= data;
    },error=>{
      console.log(error)
    })

}
}
