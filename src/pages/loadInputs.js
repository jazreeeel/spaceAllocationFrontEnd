import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function loadInputs(){
    return (
      <div className="Background">
        <header className="Header">
          <TextField id='Height' label='Height' variant='outlined'/>
          <br/>
          <TextField id='Width' label='Width' variant='outlined'/>
          <br/>
          <Link to ='/'>
            <Button>Submit</Button>
          </Link>
        </header>
      </div>
    )
  }