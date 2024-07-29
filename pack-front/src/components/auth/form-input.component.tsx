import React, { InputHTMLAttributes } from 'react';
import './form-input.styles.scss';

// Définir les types pour les props du composant
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // label est optionnel
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value && (otherProps.value as string).length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
