import {vi} from "vitest";
import { Categories } from "@/app/features/categories/models/categories.model";
import { CategoriesList } from "@/app/features/categories/components/categories.list";

const getFakeCategories = (): Categories => [
    {name: "education", id: "fakeID123", icon: ""},
]

const mockCategorySelect = (component: CategoriesList, categoryList: Categories) => 
{
     const onCategorySelect = vi.fn();

     component.categoriesList = categoryList;
     component.onCategorySelect = onCategorySelect;

     return onCategorySelect;
}

const getCategoryLinks = (dom: Document): HTMLAnchorElement[] => 
{
    return [...dom.querySelectorAll('a')];
}

export {
    mockCategorySelect,
    getFakeCategories,
    getCategoryLinks
}