import { CategoriesList } from "@/app/features/categories/components/categories.list";

import { 
    createTestEnvironment, 
    createComponent, 
    getDOMElements, 
    updateDOM,
    clickButton,
    getButtonByAriaLabel
} from "@/app/testing";

import { 
    mockCategorySelect, 
    getFakeCategories, 
    getCategoryLinks
} from "@/app/features/categories/components/categories.list.spec.helpers";

beforeAll(async() => {
    await createTestEnvironment(CategoriesList);
});

describe("CategoriesList category rendering", () => 
{
    test("should render all categories as anchor tags", () => 
    {
        const {dom} = createComponent(CategoriesList);
        const domElements = getDOMElements(dom);

        const links = getCategoryLinks(domElements);

        const receivedCategoryNames = links.map(link => link.getAttribute("aria-label"));
      
        expect(receivedCategoryNames).toEqual(
            expect.arrayContaining(["education", "work", "health", "art", "life"])
        )
    });

    test("calls onCategorySelect with the selected category when button is clicked", () => 
    {
        const {component, dom} = createComponent(CategoriesList);

        const categoryList = getFakeCategories();

        const onCategorySelect = mockCategorySelect(component, categoryList);

        const categoryButton = getButtonByAriaLabel(dom, "education");
    
        clickButton(categoryButton);

        updateDOM(dom);
        
        expect(onCategorySelect).toHaveBeenCalledWith("education");
    })
})
