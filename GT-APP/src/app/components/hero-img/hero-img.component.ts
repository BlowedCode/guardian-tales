import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImageComponent {
  @Input() Hero: string = "Placeholder";
}