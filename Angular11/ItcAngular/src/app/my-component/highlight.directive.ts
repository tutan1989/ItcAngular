import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  el:ElementRef
  @Input() color:string;

  constructor(el:ElementRef) { 
    this.el = el;
    //el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(){
    console.log("Value of colour " + this.color);
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
