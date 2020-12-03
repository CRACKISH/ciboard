import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CIJob, CIJobStatus, CIProviderType } from '../../models';
import { SettingsService } from '../settings/settings.service';
import { BaseCIService, CIService } from './ci.service';

enum JenkinJobResult {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Aborted = 'ABORTED'
}

interface JenkinJobAction {
  building: boolean;
  result: JenkinJobResult;
}

@Injectable()
export class JenkinsService extends BaseCIService implements CIService {

  protected ciProviderType = CIProviderType.Jenkins;

  protected get serviceEndPoint(): string | undefined {
    return this.ciProviderSettings?.serviceUrl;
  }

  constructor(
    private httpClient: HttpClient,
    protected settingsService: SettingsService
  ) {
    super(settingsService);
  }

  private _getHeaders(): HttpHeaders {
    const login = this.ciProviderSettings?.login;
    const password = this.ciProviderSettings?.password;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${login}:${password}`)
    });
  }

  private processJenkinsJob(jenkinsJob: JenkinJobAction): CIJob {
    const ciJob = {
      status: CIJobStatus.NotInitialized
    };
    if (jenkinsJob) {
      switch (jenkinsJob.result) {
        case JenkinJobResult.Success:
          ciJob.status = CIJobStatus.Success;
          break;
        case JenkinJobResult.Failure:
          ciJob.status = CIJobStatus.Failure;
          break;
      }
    }
    return ciJob;
  }

  public getJob(key: string): Observable<CIJob> {
    const endPoint = `${this.serviceEndPoint}/job/${key}/job/master/lastBuild/api/json`;
    return this.httpClient.get<JenkinJobAction>(endPoint, {
      headers: this._getHeaders()
    }).pipe(
      map(jenkinsJob => this.processJenkinsJob(jenkinsJob))
    );
  }

}
