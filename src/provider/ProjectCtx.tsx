import { FC, ReactNode, createContext, useState } from "react";
import { Project, ProjectsContextType } from "../types/project";

export type ProjectProvider = {
  children: ReactNode;
};

const defaultProject: ProjectsContextType = {
  projects: [],
  setProjects: () => {},
};

export const ProjectsCtx = createContext<ProjectsContextType>(defaultProject);

export const ProjectProvider: FC<ProjectProvider> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <ProjectsCtx.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsCtx.Provider>
  );
};
