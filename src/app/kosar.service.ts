import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  private kosar:any=[]
  private kosarSub = new BehaviorSubject([])
  private databaseURL= "https://foodshop-248fc-default-rtdb.europe-west1.firebasedatabase.app/rendeles.json"
  constructor(private http: HttpClient) { }

  addOrder(name:any, address:any){
    let body={name:name, address:address, cart:this.kosar}
    this.http.post(this.databaseURL,body).subscribe(
      (res)=>console.log("sikeres rendelés leadás", res)
    )
  }

  getCart(){
    return this.kosarSub
  }

  addFood(food:any, db:any){
    let i = this.kosar.findIndex(
      (e:any)=>e.id==food.id
    )
    console.log("i",i)

    if (i==-1)
    {
      food.db=db
      delete food.leiras  
      this.kosar.push(food)
    }
    else{
      this.kosar[i].db=db
    }
    console.log(this.kosar)
    this.kosarSub.next(this.kosar)
  }

}
