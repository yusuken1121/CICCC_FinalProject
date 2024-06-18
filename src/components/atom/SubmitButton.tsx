import React, { FC } from "react";
type SubmitButton = {
  onSubmitProject: (e: React.FormEvent) => void;
};

export const SubmitButton: FC<SubmitButton> = ({ onSubmitProject }) => {
  return (
    <button className="button-base-blue" onClick={onSubmitProject}>
      Submit
    </button>
  );
};
