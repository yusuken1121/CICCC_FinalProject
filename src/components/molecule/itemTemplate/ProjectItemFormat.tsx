import { FC } from "react";
type ProjectItemFormatType = {
  title: string;
  description: string;
  people: number;
};

export const ProjectItemFormat: FC<ProjectItemFormatType> = ({
  title,
  description,
  people,
}) => {
  return (
    <div className="w-5/6 h-44 border-2 mt-2 shadow-lg lg:max-w-xl flex flex-col flex-wrap justify-center p-3 break-all">
      <p>{title}</p>
      <p>{description}</p>
      <p>{people}</p>
    </div>
  );
};
