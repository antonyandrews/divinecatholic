import { Component } from '@angular/core';
import { APOSTLES } from '../../data/apostles.data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apostle-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './apostle-list.component.html',
  styleUrl: './apostle-list.component.scss'
})
export class ApostleListComponent {
  apostles = APOSTLES;
}
