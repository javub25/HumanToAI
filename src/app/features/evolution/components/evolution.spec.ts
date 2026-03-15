import { Categories } from "@/app/features/categories/components/categories";
import {
    createTestEnvironment, 
    createComponent, 
    updateDOM,
    clickButton,
    getButtonByAriaLabel,
    expectButtonToHaveText,
} from "@/app/testing";

import { CategoriesEvolution } from "@/app/features/evolution/components/evolution";

import {
    getEvolutionData, 
    updateCategoryEvolution, 
    updateEvolutionPeriod,
    expectNextPeriodToBe
} from "@/app/features/evolution/components/evolution.spec.helpers";


beforeAll(async() => {
    await createTestEnvironment(Categories);
});

describe("Categories evolution", () => 
{
    describe("determining the next evolution period", () => 
    {
         test("should return present when current period is past", () => 
         {
            const {component} = createComponent(CategoriesEvolution);

            updateEvolutionPeriod(component, "past");

            expectNextPeriodToBe(component, "present");
        });
    
        test("should return past when current period is present", () => 
        {
            const {component} = createComponent(CategoriesEvolution);

            updateEvolutionPeriod(component, "present");

            expectNextPeriodToBe(component, "past");
        });
    })

    describe("evolution selection", () => {
        
        test("should change past to present evolution for the work category", () => 
        {
            const {dom, component} = createComponent(CategoriesEvolution);

            updateCategoryEvolution(dom, "work");
            
            const evolutionButton = getButtonByAriaLabel(dom, "evolution-button");

            clickButton(evolutionButton);

            updateDOM(dom);

            const workEvolution = getEvolutionData(component);

            expect(workEvolution).toEqual(
             {
                image: '/assets/images/webp/work/work_present_AI.webp',
                alt: 'work',
                description: 'The mess has been replaced by a clean digital dashboard, allowing the worker to stop managing piles of paper and start making fast, intelligent choices.'
            });
        })

        test("should change present to past evolution for the art category", () => 
        {
            const {dom, component} = createComponent(CategoriesEvolution);

            updateCategoryEvolution(dom, "art");

            const evolutionButton = getButtonByAriaLabel(dom, "evolution-button");

            clickButton(evolutionButton);
            clickButton(evolutionButton);

            updateDOM(dom);

            const artEvolution = getEvolutionData(component);
            
            expect(artEvolution).toEqual(
             {
                image: '/assets/images/webp/art/art_past_AI.webp',
                alt: 'art',
                description: 'Success was found in the hands. It was the artist’s ability to manually mix paint and the canvas until they finally captured the perfect light and shadow.'
            });
        })

        test("should show 'switch to present' text for the life category", () => 
        {
            const {dom} = createComponent(CategoriesEvolution);

            updateCategoryEvolution(dom, "life");

            const evolutionButton = getButtonByAriaLabel(dom, "evolution-button");

            updateDOM(dom);

            expectButtonToHaveText(evolutionButton, "switch to present");
        })

        test("should show 'switch to past' text for the health category", () => 
        {
            const {dom} = createComponent(CategoriesEvolution);

            updateCategoryEvolution(dom, "health");

            const evolutionButton = getButtonByAriaLabel(dom, "evolution-button");
            clickButton(evolutionButton);

            updateDOM(dom);

            expectButtonToHaveText(evolutionButton, "switch to past");
        })
    })
})