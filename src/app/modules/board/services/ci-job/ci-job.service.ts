import { Observable } from 'rxjs';

import { CIJob } from './../../models/ci-job.model';

export interface CIJobService {
  getJob(): Observable<CIJob>;
}
