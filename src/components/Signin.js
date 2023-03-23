import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div>
        <main className='login-container'>
            <div className='login'>
                <div>
                <form className="login-form"  Validate autoComplete="on">
                    <h1>Sign Page</h1>
                    <TextField 
                    id="standard-basic"
                    label="First Name"
                    type="name" 
                    size='lager'
                    required
                    className='login-text'
                    />
                    <br/>
                    <TextField 
                    id="standard-basic"
                    label="Last Name"
                    type="name"
                    required
                    className='login-text'
                    noValidate
                    />
                    <br/>
                    <TextField 
                    id="standard-basic"
                    label="Email"
                    type="email"
                    required
                    className='login-text'
                    noValidate
                    />
                    <br/>
                    <TextField 
                    id="standard-basic"
                    label="Password"
                    type={'password'}
                    required
                    className='login-text'
                    Validate
                    />
                    <br/>
                    {/*<Link to="/home">*/}<button className='login-button'>Signup</button>{/*</Link>*/}
                </form>
                <h5>If you have a account! <span><Link to='/'>Login</Link></span></h5>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Signin