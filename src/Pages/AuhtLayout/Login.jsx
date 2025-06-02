import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

  const {signInUserWithEmailAndPassword, setUser}= useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignInUserWithEmailAndPasword = (e)=>{
    e.preventDefault();

    const email = e.target.email.value;
    const password= e.target.password.value;

    signInUserWithEmailAndPassword(email, password)
    .then((result)=>{
      // console.log(result.user)
      const user = result.user;
      setUser(user);
      navigate('/')

    })
    .catch((error)=>{
      // console.log(error)
    })



  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignInUserWithEmailAndPasword} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>

          <p className='text-sm font-medium'>new to this site please <Link to={'/auth/register'} className='text-blue-500 text-sm font-medium'>register</Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;