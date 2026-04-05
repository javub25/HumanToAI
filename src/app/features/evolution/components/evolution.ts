import { Component, input, computed, signal} from '@angular/core';
import { EvolutionPeriodType } from '@/app/features/evolution/models/evolution.model';
import { createEvolutionData } from '@/app/features/evolution/mapper/evolution.mapper';
import { ButtonText } from '@/app/shared/components/button/button.text';
import { CategoryNames } from '@/app/features/categories/models/categories.model';

@Component({
  selector: 'app-categories-evolution',
  imports: [ButtonText],
  templateUrl: './evolution.html',
})

export class CategoriesEvolution {

  private evolutions = createEvolutionData();

  categoryReceived = input<CategoryNames>();

  selectedPeriod = signal<EvolutionPeriodType>('past');

  nextPeriod = computed(() => this.getNextPeriod());

  evolution = computed(() => 
  {
    return this.selectedCategory()?.[this.selectedPeriod()];
  })

  selectedCategory = computed(() => 
  {
    return this.evolutions.find(
        evolution => evolution.category.name === this.categoryReceived()
    );
  })

  updatePeriod(period: EvolutionPeriodType): void 
  {
    this.selectedPeriod.set(period);
  }

  getNextPeriod(): EvolutionPeriodType 
  {
    const currentPeriod = this.selectedPeriod();

    return currentPeriod === "present" ? "past" : "present"; 
  }
}