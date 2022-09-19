import { IProperty } from './../property/IProperty.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {
    }


    getAllProperties(SellRent: number): Observable<IProperty[]>{
      return this.http.get('data/properties.json').pipe(
        map((data:any) =>{
          const propArray: Array<IProperty> = [];

          for(const id in data){
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propArray.push(data[id]);
            }
          }
          return propArray;
        })
      )
  }


}
