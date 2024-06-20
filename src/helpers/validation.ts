export interface Validatable {
  value: string | number; // The value of the input
  required?: boolean; // If the input is required
  minLength?: number; // The minimum length of the input (for strings)
  maxLength?: number; // The maximum length of the input (for strings)
  min?: number; // The minimum value of the input (for numbers)
  max?: number; // The maximum value of the input (for numbers)
}

export const validate = (validatableInput: Validatable): boolean => {
  let isValid: boolean = true;
  //required
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }

  //minLength
  if (
    validatableInput.minLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }

  //maxLength
  if (
    validatableInput.maxLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }

  //min
  if (validatableInput.min && typeof validatableInput.value === "number") {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  //max
  if (validatableInput.max && typeof validatableInput.value === "number") {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
};
