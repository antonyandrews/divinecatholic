import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  RouterModule
} from '@angular/router';
import { PRAYERS } from '../../prayers.data';

@Component({
  selector: 'app-prayer-details',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './prayer-details.component.html',

  styleUrls: ['./prayer-details.component.scss']
})
export class PrayerDetailsComponent implements OnInit {

  prayer: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id =
      this.route.snapshot.paramMap.get('id');

    this.prayer = PRAYERS.find(
      prayer => prayer.id === id
    );

  }

}