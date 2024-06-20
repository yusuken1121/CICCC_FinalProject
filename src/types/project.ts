export interface Project {
  id: string;
  title: string;
  description: string;
  people: number;
  type: ProjectListType;
}

export enum ProjectListType {
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}
export interface ProjectsContextType {
  projects: Project[];
}

export interface SetProjectsContextType {
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}
