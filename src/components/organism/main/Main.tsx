import {
  DndContext,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ProjectActiveList } from "../../molecule/ProjectActiveList";
import { ProjectFinishedList } from "../../molecule/ProjectFinishedList";
import { ProjectsList } from "../../molecule/ProjectList";
import { useContext } from "react";
import { ProjectsCtx } from "../../../provider/ProjectCtx";
import { Project } from "../../../types/project";

export const Main = () => {
  const { projects, setProjects } = useContext(ProjectsCtx);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
    useSensor(TouchSensor)
  );

  // ---------------------------------------
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const { id } = active;
    console.log(id); // uuid
  };
  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over || {};
    console.log("🚀", event);

    const prjctIdArr = projects.map((project: Project) => project.id);
    const activeIndex = prjctIdArr.indexOf(id as string);
    const overIndex = prjctIdArr.indexOf(overId as string);
    console.log(activeIndex, overIndex);
    [projects[activeIndex], projects[overIndex]] = [
      projects[overIndex],
      projects[activeIndex],
    ];
    setProjects(projects);
    console.log("⭐️", projects);
  }
  const handleDragEnd = () => {};
  // ---------------------------------------

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <main className="w-full h-lvh flex flex-col items-center">
        <div className="w-5/6 flex items-center justify-center">
          <ProjectsList />
        </div>

        <div className="w-5/6 flex items-center justify-between">
          <ProjectActiveList />
          <ProjectFinishedList />
        </div>
      </main>
    </DndContext>
  );
};
