import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

var login_attempts=3;

function validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0
  };
}

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      email:"",
      password:"",

      touched: {
        email:false,
        password: false
      }
    };
  }

  handleEmailChange = evt => {
    this.setState({
      email:evt.target.value
    });
  }

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("hello");
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  checklogin = evt => {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var bool = "<?php echo $bool?>"
    if(bool){
      alert("Successfully Logged In");
      console.log("successful attempt");
      this.props.history.push('/loadInputs')
      return
    } else {
      if (login_attempts===0){
        evt.preventDefault();
        console.log("unsuccessful attempt");
        alert("No login attempts available");
        return
      } else {
        evt.preventDefault();
        console.log("unsuccessful attempt");
        login_attempts=login_attempts-1;
        alert("Login failed, only "+login_attempts+" login attempts available");
        if(login_attempts===0){
          document.getElementById("email").disabled=true;
          document.getElementById("password").disabled=true;
        }
        return
      }
    }
  }

  render(){
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    //onSubmit= action="loginCheck.php" method="post">
    return (
      <div className="Background">
        <header className="Header">
          <img src='https://asset-group.github.io/img/logo.png' alt="logo" height='50'/>
          <br/><br/>
            <form onSubmit ={this.handleSubmit && this.checklogin} >
              <TextField
                id="email"
                className={shouldMarkError("email") ? "error" : ""}
                type="text"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                onBlur={this.handleBlur("email")}
                variant='outlined'
              />
              <br/> <br/>
              <TextField
                id="password"
                className={shouldMarkError("password") ? "error" : ""}
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                onBlur={this.handleBlur("password")}
                variant='outlined'
              />
              <br/> <br/>
              
              <button type = "submit" disabled={isDisabled} variant='contained' style={{width:'100%'}}>
                Login
              </button>
            </form>
          <br/>
          <div style={{flexDirection:'row'}}>
            <text>Not registered?</text>
            <Button component={Link} to='./createAccount'>
              Create Account
            </Button>
          </div>
          <Button component={Link} to='./adminLogin'>Admin Login</Button>
        </header>
      </div>
    );
  }
}

export default Home;