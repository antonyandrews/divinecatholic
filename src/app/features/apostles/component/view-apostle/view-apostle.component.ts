import { Component } from '@angular/core';
import { APOSTLES } from '../../data/apostles.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-apostle',
  standalone: true,
  imports: [],
  templateUrl: './view-apostle.component.html',
  styleUrl: './view-apostle.component.scss'
})
export class ViewApostleComponent {
  apostle: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.apostle = APOSTLES.find(
      apostle => apostle.id === id
    );

  }
}
