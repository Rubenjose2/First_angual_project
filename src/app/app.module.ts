import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recepies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recepies/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
