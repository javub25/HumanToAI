import { CategoryNames } from "@/app/features/categories/models/categories.model";
import { EVOLUTION_DESCRIPTION } from "@/app/features/evolution/data/evolution.data";
import { EvolutionPeriodType } from "@/app/features/evolution/models/evolution.model";

const getEvolutionDescription = (categoryName: CategoryNames) =>  
{
  return EVOLUTION_DESCRIPTION[categoryName];
};

const getEvolutionImage = (categoryName: CategoryNames, period: EvolutionPeriodType) => 
{
    const images = `/assets/images/webp/${categoryName}/${categoryName}_${period}_AI.webp`;
    return images
};

export {
    getEvolutionDescription,
    getEvolutionImage
}