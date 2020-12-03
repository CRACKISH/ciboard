import { CIProviderType } from './ci-provider.model';

export interface Project {
  id: number;
  name: string;
  providerType: CIProviderType;
  ciJobKey: string;
}
