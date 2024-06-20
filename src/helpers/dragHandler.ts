import { DragEndEvent, DragOverEvent } from "@dnd-kit/core";
import { Project, ProjectListType } from "../types/project";

export const handleDragOver = (
  event: DragOverEvent,
  projects: Project[],
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
) => {
  const { active, over } = event;
  const { id } = active;
  const { id: overId } = over || {};
  const prjctIdArr = projects.map((project: Project) => project.id);
  const activeIndex = prjctIdArr.indexOf(id as string);
  const overIndex = prjctIdArr.indexOf(overId as string);

  if (activeIndex === -1) {
    console.log("Invalid data");
    return;
  }

  setProjects((prevProjects) => {
    const updateProjects: Project[] = [...prevProjects];

    if (overIndex !== -1) {
      [updateProjects[activeIndex], updateProjects[overIndex]] = [
        updateProjects[overIndex],
        updateProjects[activeIndex],
      ];
    }

    if (
      overId === ProjectListType.ACTIVE ||
      overId === ProjectListType.FINISHED
    ) {
      updateProjects[activeIndex].type = overId as ProjectListType;
    }
    return updateProjects;
  });
};

export const handleDragEnd = (
  event: DragEndEvent,
  projects: Project[],
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
) => {
  const { active, over } = event;
  const { id } = active;
  const { id: overId } = over || {};
  const prjctIdArr = projects.map((project: Project) => project.id);
  const activeIndex = prjctIdArr.indexOf(id as string);
  const overIndex = prjctIdArr.indexOf(overId as string);

  if (activeIndex === -1) {
    console.log("Invalid data");
    return;
  }

  setProjects((prevProjects) => {
    const updateProjects: Project[] = [...prevProjects];

    if (overIndex !== -1) {
      [updateProjects[activeIndex], updateProjects[overIndex]] = [
        updateProjects[overIndex],
        updateProjects[activeIndex],
      ];
    }

    if (
      overId === ProjectListType.ACTIVE ||
      overId === ProjectListType.FINISHED
    ) {
      updateProjects[activeIndex].type = overId as ProjectListType;
    }
    return updateProjects;
  });
};
