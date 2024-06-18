export interface Project {
  id: string;
  title: string;
  description: string;
  people: number;
}

export interface ProjectsContextType {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}
