import React, { useContext, useState } from "react";
import { SubmitButton } from "../atom/SubmitButton";
import { v4 as uuid } from "uuid";
import { ProjectsCtx } from "../../provider/ProjectCtx";
import { ProjectListType } from "../../types/project";
import { Validatable, validate } from "../../helpers/validation";

export const ProjectForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [people, setPeople] = useState<number>(1);
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

    const titleValidatable: Validatable = {
      value: title,
      required: true,
      minLength: 1,
      maxLength: 20,
    };

    const descriptionValidatable: Validatable = {
      value: description,
      required: true,
      minLength: 1,
      maxLength: 20,
    };

    const peopleValidatable: Validatable = {
      value: people,
      required: true,
      min: 1,
      max: 10,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("INVALID INPUT DATA");
      return;
    }
    setProjects([
      ...projects,
      {
        id: uuid(),
        title,
        description,
        people,
        type: ProjectListType.ACTIVE,
      },
    ]);

    setTitle("");
    setDescription("");
    setPeople(1);
  };

  return (
    <form className="w-full h-96 p-4 mt-4 border-2 border-sky-500 ">
      <div className="form-control">
        <label htmlFor="title" className="font-mono">
          Title
        </label>
        <input
          type="text"
          className="font-mono"
          placeholder="Enter fewer than 20 characters"
          id="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description" className="font-mono">
          Description
        </label>
        <textarea
          id="description"
          className="font-mono"
          placeholder="Enter fewer than 20 characters"
          value={description}
          onChange={handleChangeDescription}
        ></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="people" className="font-mono">
          People
        </label>
        <input
          value={people}
          className="font-mono"
          type="number"
          id="people"
          step="1"
          min="0"
          max="10"
          onChange={handlePeopleChange}
          placeholder=""
        />
      </div>
      <SubmitButton onSubmitProject={submitProject} />
    </form>
  );
};
