import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project, ProjectService } from '@common-api';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ci-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  public projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) {}

  public ngOnInit(): void {
    this.projectService.getProjects()
      .pipe(
        take(1)
      )
      .subscribe(projects => this.projects = projects);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
