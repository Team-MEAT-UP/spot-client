import { useState } from "react";

export const useValidation = (initialValue: string, validate: (value: string) => string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setError("");
    setIsValid(true);
  };

  const validateValue = () => {
    const errorMessage = validate(value);
    setError(errorMessage);
    setIsValid(!errorMessage);
    return !errorMessage;
  };

  return {
    value,
    error,
    isValid,
    handleChange,
    validateValue,
  };
};
