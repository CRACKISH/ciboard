import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Settings } from './../../models/settings.model';

@Injectable()
export class SettingsService {

  constructor(private httpClient: HttpClient) {}

  public GetSettings(): Observable<Settings> {
    return this.httpClient.get<Settings>('/api/settings');
  }

}
