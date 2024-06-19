import React, { useContext, useState } from "react";
import { SubmitButton } from "../atom/SubmitButton";
import { v4 as uuid } from "uuid";
import { ProjectsCtx } from "../../provider/ProjectCtx";
import { ProjectListType } from "../../types/project";

export const ProjectsList = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [people, setPeople] = useState<number>(NaN);
  const { projects, setProjects } = useContext(ProjectsCtx);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(parseInt(e.target.value));
  };
  const submitProject = (e: React.FormEvent) => {
    e.preventDefault();
    setProjects([
      ...projects,
      { id: uuid(), title, description, people, type: ProjectListType.ACTIVE },
    ]);
  };

  return (
    <form className="w-full h-96 p-4 mt-4 border-2 border-sky-500 ">
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={handleChangeDescription}
        ></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="people">People</label>
        <input
          value={people}
          type="number"
          id="people"
          step="1"
          min="0"
          max="10"
          onChange={handlePeopleChange}
        />
      </div>
      <SubmitButton onSubmitProject={submitProject} />
    </form>
  );
};
