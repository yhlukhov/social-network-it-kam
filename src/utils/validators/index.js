export const composeValidators = (...validators) => (value) =>
   validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (value) => {
   return value ? undefined : "Field is required";
};

export const minLength = (min) => (value) => (value.length >= min ? undefined : `Minimal length: ${min}`);

export const maxLength = (max) => (value) => {
   return value.length < max ? undefined : `Max length - ${max} symbols`;
};
