export enum CIProviderType {
  Jenkins,
  TeamCity
}

export interface CIProvider {
  name: string;
  login: string;
  password: string;
  serviceUrl: string;
  type: CIProviderType;
}
