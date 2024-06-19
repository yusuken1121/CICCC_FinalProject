import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ProjectsList } from "../../molecule/ProjectList";
import { useContext } from "react";
import { ProjectsCtx } from "../../../provider/ProjectCtx";
import { Project, ProjectListType } from "../../../types/project";
import { ProjectListFormat } from "../../molecule/listTemplate/ProjectListFormat";

export const Main = () => {
  const { projects, setProjects } = useContext(ProjectsCtx);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
    useSensor(TouchSensor)
  );

  // ---------------------------------------
  // const handleDragStart = (event: DragStartEvent) => {
  //   const { active } = event;
  //   const { id } = active;
  //   console.log("uuid", id); // uuid
  // };
  // const handleDragOver = (event: DragOverEvent) => {
  //   const { active, over } = event;
  //   const { id } = active;
  //   const { id: overId } = over || {};
  //   console.log("⭐️⭐️⭐️", event);
  //   const prjctIdArr = projects.map((project: Project) => project.id);
  //   const activeIndex = prjctIdArr.indexOf(id as string);
  //   const overIndex = prjctIdArr.indexOf(overId as string);

  //   setProjects((prevProjects) => {
  //     const updateProjects = [...prevProjects];
  //     if (activeIndex === -1 || overIndex === -1) {
  //       console.log("❌❌Invalid index");
  //       return;
  //     }
  //     [updateProjects[activeIndex], updateProjects[overIndex]] = [
  //       updateProjects[overIndex],
  //       updateProjects[activeIndex],
  //     ];
  //     return updateProjects;
  //   });

  //   console.log("projects🚀", projects);
  // };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over || {};
    console.log("overId ⭐️⭐️⭐️⭐️⭐️", overId);
    console.log("🤩dragend event", event);
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
        console.log("🎄1");
        [updateProjects[activeIndex], updateProjects[overIndex]] = [
          updateProjects[overIndex],
          updateProjects[activeIndex],
        ];
      }

      if (
        overId === ProjectListType.ACTIVE ||
        overId === ProjectListType.FINISHED
      ) {
        console.log("🎄2");
        updateProjects[activeIndex].type = overId as ProjectListType;
      }
      console.log(updateProjects);
      return updateProjects;
    });

    // [projects[activeIndex], projects[overIndex]] = [
    //   projects[overIndex],
    //   projects[activeIndex],
    // ];
  };

  // ---------------------------------------

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      // onDragStart={handleDragStart}
      // onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <main className="w-full h-lvh flex flex-col items-center">
        <div className="w-5/6 flex items-center justify-center">
          <ProjectsList />
        </div>

        <div className="w-5/6 flex items-center justify-between">
          <ProjectListFormat projectType={ProjectListType.ACTIVE}>
            ACTIVE PROJECT
          </ProjectListFormat>
          <ProjectListFormat projectType={ProjectListType.FINISHED}>
            FINISHED PROJECT
          </ProjectListFormat>
        </div>
      </main>
    </DndContext>
  );
};
