import React, { useState } from 'react';
import './sign-up-form.styles.scss';

import Button from '../button/button.component';
import FormInput from './form-input.component';

const SignUpForm: React.FC = () => {
  // Fonction de gestion d'inscription
  const registerUserByEmailAndPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ajoutez ici votre logique d'inscription
    console.log('User registered');
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an Account?</h2>
      <span>Sign-Up with Email & Password</span>
      <form onSubmit={registerUserByEmailAndPassword}>
        <FormInput
          label="Name"
          required
          type="text"
        />
        <FormInput
          label="Email"
          required
          type="email"
        />
        <FormInput
          label="Password"
          required
          type="password"
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
        />
        <Button type="submit">Sign-Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
