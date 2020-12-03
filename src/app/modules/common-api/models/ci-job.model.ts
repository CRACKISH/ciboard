export enum CIJobStatus {
  NotInitialized,
  Success,
  Failure
}

export interface CIJob {
  status: CIJobStatus;
}
