import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBreakfast]'
})
export class BreakfastDirective implements OnInit  {

  constructor(private element: ElementRef) { }

  fontOpacity: number = 1;

  ngOnInit() {
    console.log(this.element);
    this.element.nativeElement.style.fontSize = '28px';
    this.element.nativeElement.style.opacity = '1';

    setInterval(() =>{
      this.fontOpacity = this.fontOpacity - 0.1;
      this.element.nativeElement.style.opacity = this.fontOpacity;
    }, 1000);
  }
}
