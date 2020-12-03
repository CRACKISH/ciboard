import { Component } from '@angular/core';
import { Project } from '@common-api';

@Component({
  selector: 'ci-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {

  public project: Project | undefined;

}
