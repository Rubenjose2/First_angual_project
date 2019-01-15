import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe','This is a simply test','https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg'),
    new Recipe('Another Recipe','This is a simply test','https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); //
  }
}
