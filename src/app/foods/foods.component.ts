import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  foods:any=[]
  keresoSzo=""
  rendezesTomb=["Alapértelmezett","Olcsók elől","Drágák elől"]
  rendezesAllapot=0
  
  constructor(private base:BaseService, 
    public search:SearchService){
    this.base.getFoods().subscribe(
      (res)=>this.foods=res
    )
    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    )
  }



  onKeyUp(event:any){
    console.log(event.target.value)
    this.search.setSearchWord(event.target.value)
  }

  RendezesIranyValt(){
    this.rendezesAllapot=(this.rendezesAllapot==2?0:++this.rendezesAllapot)

  }

}
