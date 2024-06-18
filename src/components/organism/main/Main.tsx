import { ProjectActiveList } from "../../molecule/ProjectActiveList";
import { ProjectFinishedList } from "../../molecule/ProjectFinishedList";
import { ProjectsList } from "../../molecule/ProjectList";

export const Main = () => {
  return (
    <main className="w-full h-lvh flex flex-col items-center">
      <div className="w-5/6 flex items-center justify-center">
        <ProjectsList />
      </div>

      <div className="w-5/6 flex items-center justify-between">
        <ProjectActiveList />
        <ProjectFinishedList />
      </div>
    </main>
  );
};
