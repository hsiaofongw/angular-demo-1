import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaDataService } from './shared-modules/meta-data/services/meta-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private metaDataService: MetaDataService,
    private titleService: Title,
  ) {}

  ngAfterViewInit(): void {
    const title = this.metaDataService.getMetaData().siteTitle;
    this.titleService.setTitle(title);
  }
}
