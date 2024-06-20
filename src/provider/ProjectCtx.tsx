import { FC, ReactNode, createContext, useState } from "react";
import {
  Project,
  ProjectsContextType,
  SetProjectsContextType,
} from "../types/project";

export type ProjectProvider = {
  children: ReactNode;
};

const defaultProject: ProjectsContextType = {
  projects: [],
};
const defaultSetProject: SetProjectsContextType = {
  setProjects: () => {},
};

export const ProjectsCtx = createContext<ProjectsContextType>(defaultProject);
export const SetProjectCtx =
  createContext<SetProjectsContextType>(defaultSetProject);

export const ProjectProvider: FC<ProjectProvider> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <ProjectsCtx.Provider value={{ projects }}>
      <SetProjectCtx.Provider value={{ setProjects }}>
        {children}
      </SetProjectCtx.Provider>
    </ProjectsCtx.Provider>
  );
};
