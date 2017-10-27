import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 public Item: Recipe;

  recipes: Recipe[] = [
    new Recipe('Recipe Name','Recipe Description','../../assets/recipe.png'),
    new Recipe('Recipe Name','Recipe Description','../../assets/recipe.png'),
    new Recipe('Recipe Name','Recipe Description','../../assets/recipe.png')

  ];

  constructor() { }

  ngOnInit() {
  }

  Adicionar(){
    this.Item = new Recipe('Recipe Name','Recipe Description','../../assets/recipe.png');
    this.recipes.push(this.Item);
  }

}
