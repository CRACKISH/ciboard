import { Component, HostBinding, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { CIJob, CIJobStatus, CIProviderType, CIService, JenkinsService, Project, ProjectService } from '@common-api';
import { Subject, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ci-board-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  private ciJob: CIJob = {
    status: CIJobStatus.NotInitialized
  };

  @Input()
  public id = 0;

  public project: Project;

  @HostBinding('class')
  public get getStatusClass(): string {
    let result = 'not-initialized';
    const status = this.ciJob.status;
    if (status === CIJobStatus.Success) {
      result = 'success';
    }
    if (status === CIJobStatus.Failure) {
      result = 'failure';
    }
    return result;
  }

  constructor(
    private projectService: ProjectService,
    private injector: Injector
  ) {
    this.project = this.createEmptyProject();
  }

  private createEmptyProject(): Project {
    return {
      id: -1,
      name: 'No Data',
      providerType: CIProviderType.Jenkins,
      ciJobKey: ''
    };
  }

  private subscribeCIJobData(): void {
    const ciJobKey = this.project.ciJobKey;
    if (!ciJobKey) {
      return;
    }
    const service = this.getCIJobService();
    const subscription = timer(0, 10000).pipe(
      takeUntil(this.unsubscribe$)
    );
    subscription.subscribe(() => {
      service.getJob(ciJobKey)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe(ciJob => this.ciJob = ciJob);
    });
  }

  private getCIJobService(): CIService {
    const project = this.project;
    const type = project.providerType;
    if (type === CIProviderType.Jenkins) {
      return this.injector.get(JenkinsService);
    } else {
      throw new Error('Service not implemented.');
    }
  }

  public ngOnInit(): void {
    this.projectService.getProject(this.id)
      .pipe(
        take(1)
      )
      .subscribe(project => {
        this.project = project ? project : this.createEmptyProject();
        this.subscribeCIJobData();
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
