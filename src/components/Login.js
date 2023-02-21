import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";


function Login() {  
  const [email,setEmail]= useState('');
  const [pass,setPass]= useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email,pass);
  }
    return(
       <>
       <div>
        <h1>Login Page</h1>
       </div>
       <div>
      <Form className='form' onSubmit={handleSubmit}>
      <Form.Group className="mt-1 align-center" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={e =>setEmail (e.target.value)} type="email" placeholder="Enter email" id="email" name="email" />
      </Form.Group>

      <Form.Group className="mt-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pass} onChange={e =>setPass (e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
      </Form.Group>
      {/* <Form.Group className="m-5" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button className="mt-1"  variant="primary" type="submit">
        Log in
      </Button>
      <Form.Label className="account">Don't have an account ?</Form.Label>
      <Button className="mt-1"  variant="primary" type="submit">
        Register here...
      </Button>
    </Form>
        </div>

       </>
    );
  }


export default Login;