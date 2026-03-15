import {TestBed} from "@angular/core/testing";
import {Type} from "@angular/core";

const createTestEnvironment = async (component: any) => 
{
    await TestBed.configureTestingModule({
        imports: [component],
    }).compileComponents();
}

const createComponent = <T>(componentClass: Type<T>) => 
{
    const dom = TestBed.createComponent(componentClass);
    dom.detectChanges();

    const component = dom.componentInstance;

    return {dom, component};
};

export {
    createTestEnvironment,
    createComponent
}