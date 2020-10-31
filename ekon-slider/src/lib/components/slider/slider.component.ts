import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'ekon-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  @Input() position: 'aside' | 'bellow' | 'above' = 'aside';

  @ViewChild('content', {
    read: ElementRef
  }) contentView: ElementRef<HTMLElement>;

  @HostBinding('class.aside') get isAside(): boolean { return this.position === 'aside' }
  @HostBinding('class.bellow') get isBellow(): boolean { return this.position === 'bellow' }

  previous(): void {
    const el = this.contentView && this.contentView.nativeElement;
    if (el) {
      if (el.scrollLeft - el.getBoundingClientRect().width > -el.getBoundingClientRect().width + 5) {
        el.scroll({
          behavior: 'smooth',
          left: el.scrollLeft - el.getBoundingClientRect().width
        });
      } else {
        el.scroll({
          behavior: 'smooth',
          left: el.scrollWidth
        });
      }
    }
  }

  next(): void {
    const el = this.contentView && this.contentView.nativeElement;
    if (el) {
      if (el.scrollWidth - (el.scrollLeft + el.getBoundingClientRect().width) > 5) {
        el.scroll({
          behavior: 'smooth',
          left: el.scrollLeft + el.getBoundingClientRect().width
        });
      } else {
        el.scroll({
          behavior: 'smooth',
          left: 0
        });
      }
    }
  }
}
