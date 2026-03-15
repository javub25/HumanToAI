import {ComponentFixture} from "@angular/core/testing";
import { expect } from "vitest";

const getDOMElements = (dom: ComponentFixture<unknown>) => {
        
    return dom.nativeElement;
}

const updateDOM = <T>(dom: ComponentFixture<T>) => 
{
    dom.detectChanges();
}

const getButtonByAriaLabel = <T>(dom: ComponentFixture<T>, ariaLabel: string): HTMLButtonElement =>
{
    const domElements = getDOMElements(dom);

    return domElements.querySelector(`[aria-label=${ariaLabel}]`);
}

const clickButton = (button: HTMLButtonElement) =>
{
    button.click();
}

const expectButtonToHaveText = (button: HTMLButtonElement, text: string) => 
{
    expect(button.textContent).toContain(text);
}

export {
    getDOMElements,
    updateDOM,
    clickButton,
    getButtonByAriaLabel,
    expectButtonToHaveText
}
