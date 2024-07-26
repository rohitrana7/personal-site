import { ElementRef, Renderer2 } from '@angular/core';
import { ExpandRowDirective } from './expand-row.directive';

describe('DoubleClickDirective', () => {
  it('should create an instance', () => {
    let elementRef!: ElementRef;
    let renderer!: Renderer2;
    const directive = new ExpandRowDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
