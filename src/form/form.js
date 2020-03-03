import React from 'react';
import './formStyle.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function form() {
    return (
      <div>
        <body>
          <div class='wrapper'>
            <div class = 'title'>
              Capstone Space Allocation Form
            </div>

            <Popup id='sampleForm' modal trigger={<button>Sample Form Reference</button>}>
              <div className="bg-modal">
                <text>hello</text>
                <div className="modal-content">
                    <div className="close">+</div>
                    <h2>Sample Form Reference</h2>
                    <img src="sampleForm.png" alt='alt'/>
                </div>
              </div>
            </Popup>

            <div className='form'>
              <form action='connect.php' method='post'>
                <div class='input_field'>
                  <label>Group Name:</label>
                  <input type='text' className='input' id='groupName' name='groupName'/>
                </div>

                <div class="input_field">
                  <label>Type of Prototype:</label>
                  <div className="custom_select">
                    <select name="prototype">
                      <option value="">Select</option>
                      <option value="web-based">Web-based</option>
                      <option value="software">Software</option>
                      <option value="1:1 prototype">1:1 Prototype</option>
                    </select>
                  </div>
                </div>

                <div class="input_field">
                  <label>Showcase Space Needed:</label>
                  <input type="text" class="input" name="showcaseSpace"/>
                </div>

                <div class="input_field">
                  <label>Size and Weight of Physical Prototype:</label>
                  <input type="text" class="input" name="sizeNweight"/>
                </div>

                <div class="input_field">
                  <label>No of Power Points Needed:</label>
                  <input type="text" class="input" name="powerpoints"/>
                </div>

                <div class="input_field">
                  <label>Pedestal(s):</label>
                  <input type="text" class="input" name="pedestal"/>
                </div>

                <div class="input_field">
                  <label>Other Requests:</label>
                  <textarea class="textarea" name="otherRequest"/>
                </div>

                <div class="input_field">
                  <input type="submit" value="Submit" class="btn" id="submit"/>
                </div>
              </form>
            </div>
          </div>

          <div class="bg-modal">
            <div class="modal-content">
                <div class="close">+</div>
                <h2>Sample Form Reference</h2>
                <img src="sampleForm.png" alt='imagesource'/>
            </div>
            <script src="interact.js"></script>
          </div>
          
        </body>
      </div>
    );
  }