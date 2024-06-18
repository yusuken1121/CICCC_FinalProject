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
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}
