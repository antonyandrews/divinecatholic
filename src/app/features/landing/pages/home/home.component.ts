import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../../shared/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateMetaData({
      title: 'Catholic Forever | Daily Catholic Prayers',
      description:
        'Catholic Forever provides daily prayers, rosary guides, Bible reflections, saints, and spiritual resources.',
      keywords:
        'Catholic prayers, rosary, Tamil Catholic prayers, Bible verses',
      url: 'https://catholicforever.in',
      image: 'https://catholicforever.in/assets/images/og-banner.jpg'
    });
  }
}