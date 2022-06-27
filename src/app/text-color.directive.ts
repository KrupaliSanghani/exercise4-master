import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  @Input() defaultColor: string = 'black'
  @Input() textColor: string = 'color'

  @HostBinding('style.color')
  color: string;
  constructor() { }


  ngOnInit() {
    this.color = this.defaultColor;
  }

  // ------------mouseOver event--------
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.color = this.textColor;
  }

  // ------------mouseLeave event--------
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.color = this.defaultColor;
  }
}
