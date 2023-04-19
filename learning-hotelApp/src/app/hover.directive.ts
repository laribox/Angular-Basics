import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[hotelHover]',
})
export class HoverDirective implements OnInit {
  @Input() color: string = 'red';
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.element.nativeElement);
    this.renderer.listen(this.element.nativeElement, 'click', () => {
      console.log('yes');
    });
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'grey'
    );
  }
}
