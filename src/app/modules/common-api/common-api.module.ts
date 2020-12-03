import { NgModule } from '@angular/core';

import { JenkinsService, ProjectService, SettingsService } from './services';

@NgModule({
  providers: [
    JenkinsService,
    ProjectService,
    SettingsService
  ]
})
export class CommonApiModule {}
