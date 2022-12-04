import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//react validator
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/auth-action';

import { clearMessage } from '../redux/actions/message-action';
//css
import './Login.css';

const required = (props) => {
  if (!props) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required
      </div>
    );
  }
};

const Login = (props) => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    return () => {
      // run when component will unmount
      dispatch(clearMessage());
    };
  }, []);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          navigate('/');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className='col-md-12 center-form'>
      <div className='card card-container login-form'>
        <Form onSubmit={handleLogin} ref={form}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <Input
              type='text'
              className='form-control'
              name='email'
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className='form-group'>
            <button className='btn btn-primary btn-block' disabled={loading}>
              {loading && (
                <span className='spinner-border spinner-border-sm'></span>
              )}
              <span>Login</span>
            </button>

            <Link className='btn btn-primary btn-block' to='../register'>
              Register
            </Link>
          </div>

          {message && (
            <div className='form-group'>
              <div className='alert alert-danger' role='alert'>
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
