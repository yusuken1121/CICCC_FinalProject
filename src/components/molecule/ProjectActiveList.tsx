import { ProjectListType } from "../../types/project";
import { ProjectListFormat } from "./listTemplate/ProjectListFormat";

export const ProjectActiveList = () => {
  return (
    <ProjectListFormat projectType={ProjectListType.ACTIVE}>
      ACTIVE PROJECTS
    </ProjectListFormat>
  );
};
