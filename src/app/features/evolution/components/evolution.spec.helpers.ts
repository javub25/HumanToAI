import { CategoriesEvolution } from "@/app/features/evolution/components/evolution";
import { ComponentFixture } from "@angular/core/testing";
import { CategoryNames } from "@/app/features/categories/models/categories.model";
import { EvolutionPeriodType } from "@/app/features/evolution/models/evolution.model";
import { expect } from "vitest";

const updateCategoryEvolution = (dom: ComponentFixture<CategoriesEvolution>, category: CategoryNames) => 
{
    dom.componentRef.setInput("categoryReceived", category);
}

const updateEvolutionPeriod = (component: CategoriesEvolution, period: EvolutionPeriodType) => 
{
    component.updatePeriod(period);
} 

const getNextPeriod = (component: CategoriesEvolution): EvolutionPeriodType => 
{
    return component.nextPeriod();
}

const getEvolutionData = (component: CategoriesEvolution) => 
{
    return component.evolution();
}

const expectNextPeriodToBe = (component: CategoriesEvolution, period: EvolutionPeriodType) => 
{
    const nextPeriod = getNextPeriod(component);

    expect(nextPeriod).toBe(period);
}

export {
    updateCategoryEvolution,
    updateEvolutionPeriod,
    getEvolutionData,
    expectNextPeriodToBe,
}