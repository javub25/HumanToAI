import { CATEGORIES_DATA } from "@/app/features/categories/data/categories.data";
import { Category } from "@/app/features/categories/models/categories.model";
import { EvolutionType, EvolutionPeriodContent } from "@/app/features/evolution/models/evolution.model";
import { getEvolutionDescription, getEvolutionImage } from "@/app/features/evolution/utils/evolution.utils";

const createEvolutionData = (): EvolutionType[] =>
{
    return CATEGORIES_DATA.map(createCategoryEvolution);
}

const createCategoryEvolution = (category: Category): EvolutionType => 
{
    const {name} = category;
    const {past, present} = getEvolutionDescription(name);

    return {
        category,
        past: createEvolutionPeriod({name, period: 'past', description: past}),
        present: createEvolutionPeriod({name, period: 'present', description: present})
    }
}

const createEvolutionPeriod = ({name, period, description}: EvolutionPeriodContent) => 
{
    return {
        image: getEvolutionImage(name, period),
        alt: name,
        description
    }
}

export {
    createEvolutionData,
    createCategoryEvolution
}