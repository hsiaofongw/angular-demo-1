import { Injectable } from '@angular/core';
import {
  USE_BACKEND as useBackend,
  API_CONFIGURATIONS as apiConfigs,
} from '../config';

@Injectable()
export class ApiConfigService {
  getAllFriendsPath(): string {
    const config = apiConfigs[useBackend];
    const server = config.server;
    const path = config.getAllFriendPath;
    return server+path;
  }
}
