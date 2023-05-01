import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExpandRow]'
})
export class ExpandRowDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin', '10px 20px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '0.5s');
  }

}
