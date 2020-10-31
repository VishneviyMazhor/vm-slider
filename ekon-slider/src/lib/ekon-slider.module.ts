import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { MatRippleModule } from '@angular/material/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';

@NgModule({
  imports: [CommonModule, MatRippleModule, FontAwesomeModule],
  declarations: [SliderComponent],
  exports: [SliderComponent],
})
export class EkonSliderModule {
  constructor(faLib: FaIconLibrary) {
    faLib.addIcons(
      faChevronRight,
      faChevronLeft
    );
  }
}
