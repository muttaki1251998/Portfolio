import React from 'react';
import emailjs from 'emailjs-com';
import { USER_ID, ACCESS_TOKEN, TEMPLATE_ID, SERVICE_ID } from '../Keys';
import './stylesheet/form.css';
import { Link } from 'react-router-dom';
import createBrowserHistory from '../history';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then((result) => {
      console.log(result.text);
      createBrowserHistory.push('/');
    }, error => {
      console.log(error.text);
    });
  }

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div className="container">
      <form style={{marginTop:'300px'}} onSubmit={sendEmail} className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
        <div class="mb-3">
          <label for="yourName" name="from_name" className="form-label" style={{color:'#f7e8e6'}}>Your name</label>
          <input style={{ width: '400px' }} type="text" class="form-control" id="yourName" />
        </div>
        <div class="mb-3">
          <label for="email" name="from_email" className="form-label" style={{color:'#f7e8e6'}}>Your email</label>
          <input style={{ width: '400px' }} type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="email" name="email" className="form-label" style={{color:'#f7e8e6'}}>Message</label>
          <textarea
            name="message"
            class="form-control"
            placeholder="Leave your message here"
            id="floatingTextarea2"
            style={{ height: "100px", width: "400px" }}>
          </textarea>
        </div>
        <input className="butts" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Form;