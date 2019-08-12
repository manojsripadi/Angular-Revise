import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[myHidden]'
})
export class HideDirective {

  constructor(private el:ElementRef, private renderer:Renderer) { 
  }
@Input() myHidden:boolean;
ngOnInIt(){
  if(this.myHidden){
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none')
  }
}
}
