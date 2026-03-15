type CategoryNames = "education" | "work" | "health" | "art" | "life";

type Category =
{
    name: CategoryNames;
    id: string;
    icon: string;
}

type Categories = Category[];


export type { 
    Category, 
    Categories,
    CategoryNames,
};


