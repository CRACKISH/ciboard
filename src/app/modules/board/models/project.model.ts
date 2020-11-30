export enum ProjectType {
  Jenkins,
  TeamCity
}

export interface Project {
  id: number;
  name: string;
  type: ProjectType;
}
