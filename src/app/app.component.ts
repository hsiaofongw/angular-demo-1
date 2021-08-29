import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaDataService } from './shared-modules/meta-data/services/meta-data.service';
import { exampleArticles } from './article/example-data';
import { IArticle } from './article/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  articles: IArticle[] = exampleArticles;

  constructor(
    private metaDataService: MetaDataService,
    private titleService: Title,
  ) {}

  ngAfterViewInit(): void {
    const title = this.metaDataService.getMetaData().siteTitle;
    this.titleService.setTitle(title);
  }
}
