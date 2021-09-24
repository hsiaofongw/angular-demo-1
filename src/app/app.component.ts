import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LogBroadcaster } from './shared-modules/logging/services/log-broadcaster.service';
import { LoggerBuilder } from './shared-modules/logging/services/logger-builder.service';
import { MetaDataService } from './shared-modules/meta-data/services/meta-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private metaDataService: MetaDataService,
    private titleService: Title,
    private loggerBuilder: LoggerBuilder,
    private logBroadCaster: LogBroadcaster
  ) {}

  ngAfterViewInit(): void {
    const title = this.metaDataService.getMetaData().siteTitle;
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.loggerBuilder.insertLogHook((log) => {
      this.logBroadCaster.broadcast(log);
    });
  }
}
