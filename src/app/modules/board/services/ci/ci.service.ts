import { Observable } from 'rxjs';

import { CIJob } from '../../models/ci-job.model';

export interface CIService {
  getJob(key: string): Observable<CIJob>;
}
