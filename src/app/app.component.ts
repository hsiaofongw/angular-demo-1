import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { ClientUniqueMarkService } from './shared-modules/client-unique-mark/services/client-unique-mark.service';
import { LogBroadcaster } from './shared-modules/logging/services/log-broadcaster.service';
import { LogPersistentService } from './shared-modules/logging/services/log-persistent.service';
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
    private logBroadCaster: LogBroadcaster,
    private clientUniqueMarkService: ClientUniqueMarkService,
    private logPersistentService: LogPersistentService
  ) {}

  ngAfterViewInit(): void {
    const title = this.metaDataService.getMetaData().siteTitle;
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.loggerBuilder.insertLogHook((log) => {
      this.logBroadCaster.broadcast(log);
    });

    this.loggerBuilder.insertLogHook((_, logs) => {
      this.logPersistentService.writeLogsToLocalStorage(logs);
    });

    const logger = this.loggerBuilder.makeLogger({
      moduleId: AppModule.name,
      classId: AppComponent.name,
    });

    logger.info('App 根组件初始化成功');

    const clientToken = this.clientUniqueMarkService.clientToken;
    logger.info({ clientToken });
  }
}
