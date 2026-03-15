import { Category} from "@/app/features/categories/models/categories.model";

interface EvolutionPeriodContent extends EvolutionPeriodInfo {
    period: EvolutionPeriodType;
}

interface EvolutionStage {
    image: string;
    alt: string;
    description: string;
}

interface EvolutionType 
{
    category: Category;
    past: EvolutionStage;
    present: EvolutionStage;
}

type EvolutionPeriodType = "past" | "present";
type EvolutionPeriodInfo = Pick<Category, "name"> & Pick<EvolutionStage, "description">;


export type {
    EvolutionType,
    EvolutionPeriodType,
    EvolutionPeriodContent,
}