import { Component, Input} from '@angular/core';
import {CATEGORIES_DATA } from '@/app/features/categories/data/categories.data';
import { CategoryNames } from '@/app/features/categories/models/categories.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories.list.html',
  styleUrls: ['./categories.list.css']
})

export class CategoriesList 
{
    categoriesList = CATEGORIES_DATA;

    @Input() onCategorySelect!: (category: CategoryNames) => void;
}

