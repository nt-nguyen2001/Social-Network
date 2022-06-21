import { ChangeEvent, useCallback, useState } from 'react';
import { Validation } from '../Models';
import useDebounce from './useDebounce';

function useFormValidation<T extends Record<keyof T, any>>({
  validations,
  initial,
}: {
  validations: Partial<Record<keyof T, Validation>>;
  initial?: Partial<T>;
}) {
  const [data, setData] = useState<T>((initial || {}) as T);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const debounce = useDebounce();

  const handleChange = (key: keyof T, fn?: Function) => (e: ChangeEvent<HTMLInputElement>) => {
    delete errors[key];
    if (fn) {
      debounce(fn, 500, e.target.value);
    }
    setData({
      ...data,
      [key]: e.target.value,
    });
  };
  const validate = useCallback(
    (validation: any, value: string, newErrors: Partial<Record<keyof T, string>>, key: keyof T) => {
      if (validation?.required?.value && !value) {
        newErrors[key] = validation?.required?.message;
        return;
      }
      const pattern = validation?.pattern;
      if (pattern?.value && !pattern?.value.test(value)) {
        newErrors[key] = pattern.message;
        return;
      }
      const custom = validation?.custom;

      if (custom?.isValid && !custom.isValid(value)) {
        newErrors[key] = custom.message;
        return;
      }
    },
    []
  ); // ?
  const handleValidate = (key?: keyof T) => (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = (key && { ...errors }) || {};

    if (key) {
      if (!newErrors[key]) {
        const value = data[key];
        const validation = validations[key];
        delete newErrors[key];
        validate(validation, value, newErrors, key);
      }
    } else {
      for (const key in data) {
        const value = data[key];
        const validation = validations[key];
        validate(validation, value, newErrors, key);
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length <= 0;
  };

  return { data, handleChange, errors, setErrors, handleValidate };
}

export default useFormValidation;
