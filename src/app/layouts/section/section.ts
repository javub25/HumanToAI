import { Categories } from '@/app/features/categories/components/categories';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [Categories],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {}
