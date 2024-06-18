import { ProjectListType } from "../../types/project";
import { ProjectListFormat } from "./listTemplate/ProjectListFormat";

export const ProjectFinishedList = () => {
  return (
    <ProjectListFormat projectType={ProjectListType.FINISHED}>
      FINISHED PROJECTS
    </ProjectListFormat>
  );
};
