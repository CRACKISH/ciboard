import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CIJob, CIJobStatus } from '../../models';
import { CIService } from './ci.service';

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
export class JenkinsService implements CIService {

  private serviceEndPoint = 'http://ts1-infr-jenkins';

  constructor(
    private httpClient: HttpClient
  ) {}

  private _getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('login:password')
    });
  }

  public getJob(key: string): Observable<CIJob> {
    const endPoint = `${this.serviceEndPoint}/job/${key}/job/master/lastBuild/api/json`;
    return this.httpClient.get<JenkinJobAction>(endPoint, {
      headers: this._getHeaders()
    }).pipe(
      map(jenkinsJob => {
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
      })
    );
  }

}
