import React from 'react'
import TextField from '@material-ui/core/TextField';
import "../App.css"
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    loginData:{
        color:"#fff"
    }
})
function Login() {
    
    const classes = useStyles()
  return (
        <main className='login-container'>
            <div className='login'>
                <div>
                <form className="login-form"  Validate autoComplete="on">
                    <h1>Login page</h1>
                    <TextField
                    className={classes.loginData}
                    id="standard-basic"
                    label="Email"
                    type="email" 
                    size='lager'
                    required
                    />
                    <br/>
                    <TextField 
                    id="standard-basic"
                    label="Password"
                    required
                    className='login-text'
                    noValidate
                    />
                    <br/>
                    <Link to="/home"><button className='login-button'>Login</button></Link>
                </form>
                <h5>If you don't have a account! <span><Link to='/signin'>sign up</Link></span></h5>
                </div>
            </div>
        </main>
  )
}

export default Login