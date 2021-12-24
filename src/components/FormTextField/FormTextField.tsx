export interface FormTextFieldProps {
  name: string;
}

function FormTextField({
  name,
  ...otherProps
}: FormTextFieldProps) {
  return (
    <input
      {...otherProps}
      name={name}
    />
  );
}

export default FormTextField;
