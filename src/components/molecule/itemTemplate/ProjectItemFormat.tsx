import { useSortable } from "@dnd-kit/sortable";
import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";
import { IoAccessibility } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoListCircle } from "react-icons/io5";

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
      className="w-5/6 min-h-44 border-2 mt-2 shadow-lg lg:max-w-xl flex flex-col flex-wrap justify-center p-3 break-all"
    >
      <p className="item-container-base text-xl md:text-2xl">
        <IoListCircle className="item-icons-base" />
        {title}
      </p>
      <p className="item-container-base text-xl">
        <IoChatbubbleEllipses className="item-icons-base" />
        {description}
      </p>
      <p className="item-container-base text-xl">
        <IoAccessibility className="item-icons-base" />
        {people}
      </p>
    </li>
  );
};
