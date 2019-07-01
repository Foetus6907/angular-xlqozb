import { Component, OnInit, Input } from '@angular/core';
import { PokemonStore } from '../pokemon-store';
import { Type } from '../type';



@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Input() types: [];
  currentTypes: Type[];

  constructor(private store: PokemonStore) { 
    
  }

  ngOnInit() {
    this.store.state$.subscribe(state => {
     
    });
    this.setType();
    

  }

  setType(){
    console.log(this.types)
    this.currentTypes = new Array<Type>();
    console.log(this.currentTypes)


     for(var i = 0 ; i < this.types.length;i++)
     {
      if(this.store.state.types.find(type=>type.name==this.types[i].type.name))
      {
       this.currentTypes.push(this.store.state.types.find(type=>type.name==this.types[i].type.name));
      } 
      else {
        this.currentTypes.push(new Type());
      }
      
      
     }
    console.log(this.currentTypes)


  }

}