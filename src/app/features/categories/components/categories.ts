import { Component, signal} from '@angular/core';
import { CategoryNames } from '@/app/features/categories/models/categories.model';
import { CategoriesEvolution } from '@/app/features/evolution/components/evolution';
import { CategoriesList } from '@/app/features/categories/components/categories.list';

@Component({
  selector: 'app-categories',
  imports: [CategoriesEvolution, CategoriesList],
  templateUrl: './categories.html',
})

export class Categories
{
  currentCategory = signal<CategoryNames>("education");

  updateCategory = (category: CategoryNames) => 
  {
    this.currentCategory.set(category);
  }
}