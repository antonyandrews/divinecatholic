import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  private title = inject(Title);
  private meta = inject(Meta);

  updateMetaData(config: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
  }) {

    this.title.setTitle(config.title);

    this.meta.updateTag({
      name: 'description',
      content: config.description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: config.keywords || ''
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: config.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: config.description
    });

    this.meta.updateTag({
      property: 'og:image',
      content: config.image || ''
    });

    this.meta.updateTag({
      property: 'og:url',
      content: config.url || ''
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: config.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: config.image || ''
    });
  }
}