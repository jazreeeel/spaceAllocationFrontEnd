import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

  checklogin(){
    var login_attempts=3;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email==="admin@gmail.com" && password==="password"){
      alert("Successfully Logged In");
      console.log("successful attempt");
      document.getElementById("email").value="";
      document.getElementById("password").value="";
      return true;
    } else {
      if (login_attempts===0){
        console.log("unsuccessful attempt");
        alert("No login attempts available");
        return false;
      } else {
        console.log("unsuccessful attempt");
        login_attempts=login_attempts-1;
        alert("Login failed, only "+login_attempts+" login attempts available");
        if(login_attempts===0){
          document.getElementById("email").disabled=true;
          document.getElementById("password").disabled=true;
        }
        return false;
      }
    }
    return false;
  }

  render(){
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div className="Background">
        <header className="Header">
          <img src='https://asset-group.github.io/img/logo.png' alt="logo" height='50'/>
          <br/><br/>
            <form onSubmit="return checklogin() && handleSubmit();" action="loginCheck.php" method="post">
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
              <Button disabled={isDisabled} component={Link} to='./loadInputs' variant='contained' style={{width:'100%'}}>
                Login
              </Button>
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