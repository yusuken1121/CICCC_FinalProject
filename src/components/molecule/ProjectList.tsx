import { SubmitButton } from "../atom/SubmitButton";

export const ProjectsList = () => {
  return (
    <form className="w-full h-96 p-4 mt-4 border-2 border-sky-500 ">
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea id="description"></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="people">People</label>
        <input type="number" id="people" step="1" min="0" max="10" />
      </div>
      <SubmitButton />
    </form>
  );
};
