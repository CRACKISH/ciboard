import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CIJob } from '../../models';
import { CIJobService } from './ci-job.service';

@Injectable()
export class JenkinsJobService implements CIJobService {

  public getJob(): Observable<CIJob> {
    throw new Error('Method not implemented.');
  }

}
