import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { hLink } from '../../constants/constants';
import { SharedModule } from '../../_modules/shared/shared.module';
import { FooterComponent } from '../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hLink = hLink;
  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    const typed = new Typed('.typed-element', options);

    this.titleService.setTitle('Rohit Rana - Founder, CEO');

    this.meta.addTags([
      { name: 'author', content: 'Rohit Rana' },
      {
        name: 'description',
        content:
          'I am Rohit Rana, Founder, CEO of Arrayscript. This is my portfolio website about my experiences and projects till date.',
      },
      {
        name: 'keywords',
        content:
          'resume, j2ee, java8, personal site, Rohit Rana, rohit, rana, website, best resume website, full stack developer, full stack java developer, java full stack developer, programmer, software developer, algorithms, oops, data structures, mysql, computer science engineer, software engineer, senior software engineer, web services, restful jaxrs, microservices, spring boot',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '7 days' },

      // Open Graph (OG) meta tags
      { property: 'og:title', content: 'Rohit Rana - Founder, CEO' },
      { property: 'og:type', content: 'Portfolio' },
      { property: 'og:url', content: 'http://ranarohit.com/' },
      { property: 'og:image', content: 'http://ranarohit.com/assets/bokeh.png' },
      { property: 'og:site_name', content: 'Rohit Rana' },
      {
        property: 'og:description',
        content:
          'Rohit Rana, Founder, CEO of Arrayscript, 6+ years of experience. This is my interactive portfolio website about my experiences',
      },
    ]);
  }
}

const options = {
  strings: ['Full Stack Dev.', 'Problem Solver', 'Rohit Rana'],
  typeSpeed: 50,
  backSpeed: 70,
  showCursor: false,
  cursor: 200,
};
