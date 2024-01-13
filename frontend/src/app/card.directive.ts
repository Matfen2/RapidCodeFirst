import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {
  constructor(private el: ElementRef) {
    this.scale('');
    this.opacity('');
  }

  private scale(up: string) {
    return this.el.nativeElement.style.scale = up;
  };

  private opacity(show: string) {
    return this.el.nativeElement.style.opacity = show;
  }

  @HostListener ('mouseenter') onMouseEnter() {
    this.scale('1.1');
    this.opacity('1.0');
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.scale('1.0');
    this.opacity('0.8')
  }
}
