import { Directive,ElementRef } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appUpvoteHighlight]'
})
export class UpvoteHighlightDirective {

  constructor(private elem:ElementRef) { }
 
  // Math.max(...points)

}
