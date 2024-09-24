import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginForm.css'; // Import des styles spécifiques

const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className="login-form-container">
      <h1>Login has</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <button type="submit">Login</button>
        </Form>
        
      </Formik>
      // eslint-disable-next-line react/jsx-no-undef
      <p>Vous n'avez pas de compte ? <Link to="/signup">Inscrivez-vous ici</Link></p>
    </div>
  );
};

export default LoginForm;
