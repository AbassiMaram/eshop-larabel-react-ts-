import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from './form-input.component';
import Button from '../button/button.component';

interface SignInFormProps {
  googleSignInUrl: string;
}

interface FormFields {
  email: string;
  password: string;
}

const SignInForm: React.FC<SignInFormProps> = ({ googleSignInUrl }) => {
  const defaultFormFields: FormFields = {
    email: '',
    password: '',
  };

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const signInUserWithEmailAndPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/auth/signInWithEmailAndPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFields),
    })
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('token', data.token);
      if (data.url) {
        window.location.replace(data.url);
      } else {
        console.log('Invalid Email/Password');
      }
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an Account?</h2>
      <span>Sign-In with Email & Password</span>
      <form onSubmit={signInUserWithEmailAndPassword}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign-In</Button>
          <a href={googleSignInUrl} className="button-container google-sign-in">
            Google Sign-In
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
