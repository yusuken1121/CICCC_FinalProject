import { FC, ReactNode, useContext } from "react";
import { ProjectItemFormat } from "../itemTemplate/ProjectItemFormat";
import { ProjectsCtx } from "../../../provider/ProjectCtx";
import { Project, ProjectListType } from "../../../types/project";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

type ProjectListFormat = {
  children: ReactNode;
  projectType: ProjectListType;
};

export const ProjectListFormat: FC<ProjectListFormat> = ({
  children,
  projectType,
}) => {
  const { projects } = useContext(ProjectsCtx);
  const { setNodeRef } = useDroppable({ id: projectType });

  const filteredProjects = projects.filter(
    (project: Project) => project.type === projectType
  );

  return (
    <div className="w-48p h-svh mb-2 border-2 border-sky-500 mt-4">
      <div className="banner-base flex justify-center">
        <h1 className="h1-base mb-2">{children}</h1>
      </div>
      <SortableContext
        id={projectType}
        items={filteredProjects.map((project: Project) => project.id)}
        strategy={rectSortingStrategy}
      >
        <ul
          className="w-full flex flex-col justify-start items-center"
          ref={setNodeRef}
        >
          {filteredProjects.map((project: Project) => {
            return (
              <ProjectItemFormat
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                people={project.people}
              />
            );
          })}
        </ul>
      </SortableContext>
    </div>
  );
};
