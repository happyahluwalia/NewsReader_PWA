import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nwSocial]'
})
export class SocialDirective {

  @Input() baseURL: string;
  @Input() image: string;
  @Input() socialMedia: string;
  @Input() title: string;

  @HostListener('click') click(eventData: Event) {
      console.log('tweet clicked');
      this.socialMedia = 'twitter';
      this.title = 'this is the test title';
      this.baseURL = 'http://localhost:4200';
      this.onClick();
  }

  constructor(private eleRef: ElementRef, private render: Renderer2) {}

 onClick() {
    if (this.socialMedia === 'twitter') {
        this.title = this.title.slice(0, 100);
        const tweet = this.title + ' ' + this.baseURL;
        window.open('https://twitter.com/intent/tweet?status=' + tweet);

    }
  }
}
