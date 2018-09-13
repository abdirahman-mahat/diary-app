import { Directive,ElementRef,Input ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

constructor(private elem:ElementRef){}


  @HostListener('click') onClicks() {
  this.textDeco('yellow');
}

@HostListener('dblclick') onDoubleClicks() {
  this.textDeco('white');
}

private textDeco(action: string) {
this.elem.nativeElement.style.backgroundColor=action;
}

}
