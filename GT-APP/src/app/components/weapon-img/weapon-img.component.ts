import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'weapon-img',
  templateUrl: './weapon-img.component.html',
  styleUrls: ['./weapon-img.component.scss']
})
export class WeaponImageComponent {
  @Input() Weapon: string = "Placeholder";
}