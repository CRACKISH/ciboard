export enum CIJobStatus {
  NotInitialized,
  Successful,
  Faulty
}

export interface CIJob {
  status: CIJobStatus;
}
