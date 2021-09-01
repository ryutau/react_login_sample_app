import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import EmailAndPasswordFrom from '../components/EmailAndPasswordForm';

const LoginPage = ({history}) => {
  const { login } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    login(email.value, password.value, history);
  };
  return (
    <>
      This is LoginPage!
      <EmailAndPasswordFrom onSubmit={handleSubmit} text="ログイン" />
    </>
  );
};

export default withRouter(LoginPage);