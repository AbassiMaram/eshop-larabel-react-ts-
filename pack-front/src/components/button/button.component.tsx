import React from 'react';
import './buttons.styles.scss';



// Définir les types pour les boutons
type ButtonType = 'google' | 'inverted' | 'default';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}

// Définir les classes de types de boutons
const BUTTON_TYPES_CLASSES: { [key in ButtonType]: string } = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: 'default',
};

const Button: React.FC<ButtonProps> = ({ children, buttonType = 'default', ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType] || ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
