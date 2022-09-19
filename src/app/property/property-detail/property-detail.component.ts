import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public pId!: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pId = Number(this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (p)=>{
        this.pId =+p['id']
      }
    )
  }

  onBack(){
    this.router.navigate(['/'])
  }

  onSelectNext(){
    this.pId +=1;
    this.router.navigate(['property-details ', this.pId])

  }

}
