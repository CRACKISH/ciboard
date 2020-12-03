import { Observable } from 'rxjs';

import { CIJob, CIProvider } from '../../models';
import { SettingsService } from '../settings/settings.service';

export interface CIService {
  getJob(key: string): Observable<CIJob>;
}

export abstract class BaseCIService {

  protected ciProviderType = 0;

  protected ciProviderSettings: CIProvider | undefined;

  constructor(
    protected settingsService: SettingsService
    ) {
      this.initializeProviderSettings();
  }

  private initializeProviderSettings(): void {
    this.settingsService.GetSettings().subscribe(settings => {
      const ciProviderSettings = settings?.ciProviders.find(ciProvider => ciProvider.type === this.ciProviderType);
      this.ciProviderSettings = ciProviderSettings;
    });
  }
}
