import { useSortable } from "@dnd-kit/sortable";
import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";

type ProjectItemFormatType = {
  id: string;
  title: string;
  description: string;
  people: number;
};

export const ProjectItemFormat: FC<ProjectItemFormatType> = ({
  id,
  title,
  description,
  people,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
  };
  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-5/6 h-44 border-2 mt-2 shadow-lg lg:max-w-xl flex flex-col flex-wrap justify-center p-3 break-all"
    >
      <p>{title}</p>
      <p>{description}</p>
      <p>{people}</p>
    </li>
  );
};
