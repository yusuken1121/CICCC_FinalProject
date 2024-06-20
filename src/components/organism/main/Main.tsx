import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ProjectsList } from "../../molecule/ProjectList";
import { useContext } from "react";
import { ProjectsCtx } from "../../../provider/ProjectCtx";
import { Project, ProjectListType } from "../../../types/project";
import { ProjectActiveList } from "../../molecule/ProjectActiveList";
import { ProjectFinishedList } from "../../molecule/ProjectFinishedList";

export const Main = () => {
  const { projects, setProjects } = useContext(ProjectsCtx);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
    useSensor(TouchSensor)
  );

  const handleDragOver = (event: DragOverEvent) => {
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

  const handleDragEnd = (event: DragEndEvent) => {
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

  // ---------------------------------------

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <main className="w-full h-lvh flex flex-col items-center">
        <div className="w-5/6 flex items-center justify-center">
          <ProjectsList />
        </div>

        <div className="w-5/6 min-h-svh flex flex-col md:flex-row items-start justify-between">
          <ProjectActiveList />
          <ProjectFinishedList />
        </div>
      </main>
    </DndContext>
  );
};
