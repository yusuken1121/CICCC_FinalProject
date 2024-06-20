import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { useContext } from "react";
import { ProjectsCtx } from "../../../provider/ProjectCtx";
import { ProjectActiveList } from "../../molecule/ProjectActiveList";
import { ProjectFinishedList } from "../../molecule/ProjectFinishedList";
import { handleDragEnd, handleDragOver } from "../../../helpers/dragHandler";
import { ProjectForm } from "../../molecule/ProjectForm";

export const Main = () => {
  const { projects, setProjects } = useContext(ProjectsCtx);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
    useSensor(TouchSensor)
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragOver={(event) => handleDragOver(event, projects, setProjects)}
      onDragEnd={(event) => handleDragEnd(event, projects, setProjects)}
    >
      <main className="w-full h-lvh flex flex-col items-center">
        <div className="w-5/6 flex items-center justify-center">
          <ProjectForm />
        </div>

        <div className="w-5/6 min-h-svh flex flex-col md:flex-row items-start justify-between">
          <ProjectActiveList />
          <ProjectFinishedList />
        </div>
      </main>
    </DndContext>
  );
};
