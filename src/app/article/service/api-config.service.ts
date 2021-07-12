import { Injectable } from '@angular/core';
import { API_CONFIG, CURRENT_BACKEND } from '../config';

@Injectable()
export class ApiConfigService {

  constructor() { }

  getAllArticlesPath(): string {
    const backend = API_CONFIG[CURRENT_BACKEND];
    return backend.server + backend.getAllArticlesPath;
  }
}
