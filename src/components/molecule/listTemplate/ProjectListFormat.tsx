import { FC, ReactNode, useContext } from "react";
import { ProjectItemFormat } from "../itemTemplate/ProjectItemFormat";
import { ProjectsCtx } from "../../../provider/ProjectCtx";
import { Project, ProjectListType } from "../../../types/project";

type ProjectListFormat = {
  children: ReactNode;
  projectType: ProjectListType;
};

export const ProjectListFormat: FC<ProjectListFormat> = ({
  children,
  projectType,
}) => {
  const { projects } = useContext(ProjectsCtx);
  const activeProjects = projects.filter((project: Project) => {
    return project.type === "ACTIVE";
  });
  console.log("active 🚀", activeProjects);
  const finishedProjects = projects.filter((project: Project) => {
    return project.type === "FINISHED";
  });
  console.log("finished 🚀", finishedProjects);

  return (
    <div className="w-48p h-svh mb-2 border-2 border-sky-500 mt-4">
      <div className="banner-base flex justify-center">
        <h1 className="h1-base mb-2">{children}</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {projectType === "ACTIVE" &&
          activeProjects.map((project: Project) => {
            return (
              <ProjectItemFormat
                key={project.id}
                title={project.title}
                description={project.description}
                people={project.people}
              />
            );
          })}
        {projectType === "FINISHED" &&
          finishedProjects.map((project: Project) => {
            return (
              <ProjectItemFormat
                key={project.id}
                title={project.title}
                description={project.description}
                people={project.people}
              />
            );
          })}
      </div>
    </div>
  );
};
