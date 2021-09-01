import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import EmailAndPasswordFrom from '../components/EmailAndPasswordForm';

const SignUpPage = ({history}) => {
  const { signup } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    signup(email.value, password.value, history);
  };
  return (
    <>
      This is Signup page
      <EmailAndPasswordFrom onSubmit={handleSubmit} text="ユーザー登録" />
    </>
  );
};

export default withRouter(SignUpPage);