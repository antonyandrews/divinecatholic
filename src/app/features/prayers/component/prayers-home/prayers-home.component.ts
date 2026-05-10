import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRAYERS } from '../../prayers.data';

@Component({
  selector: 'app-prayers-home',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './prayers-home.component.html',

  styleUrls: ['./prayers-home.component.scss']
})
export class PrayersHomeComponent {

  prayers = PRAYERS;

}