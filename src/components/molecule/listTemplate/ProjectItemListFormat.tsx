import { FC, ReactNode } from "react";

type ProjectItemListFormat = {
  children: ReactNode;
};

export const ProjectItemListFormat: FC<ProjectItemListFormat> = ({
  children,
}) => {
  return (
    <div className="w-48p h-svh mb-2 border-2 border-sky-500 mt-4">
      <div className="banner-base flex justify-center">
        <h1 className="h1-base">{children}</h1>
      </div>
    </div>
  );
};
