import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { signup } from '../actions';

import { PageContainer, 
    LoginContainer, 
    LoginHeader, 
    FormContainer, 
    InputContainer, Button} from '../styled-components';
import Footer from "./Footer";


const SignUpContainer = styled(LoginContainer)`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`

const SignUpForm = styled(FormContainer)`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-right: 15px;
    max-width: 600px;


/*    button{
        width: 30%;
        height: auto;
    }*/
`

const SignUpInputs = styled(InputContainer)`
    margin-top: 20px;
    display: flex;
    flex-flow: column wrap;
  
    input{
        width: 300px;
    }
`


const SignUp = props => {
    const[newUser, setNewUser] = useState({username: '', password: '', email: ''});

    const handleChange = e => {
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
         })
    }

    const signup = e => {
        e.preventDefault();
        if(!newUser.username || !newUser.password || !newUser.email){
            return alert('Please fill out all the fields to sign up.')
        } else {
            props.signup(newUser)
            .then(res => {
                console.log(res);
            })
        }
    }
    
    return(
        <PageContainer>
            <SignUpContainer>
                <LoginHeader>
                    <h1>Sign Up</h1> 
                    <p>Signing up is optional, and allows you to save your exit strategies. We will never provide anyone else your information.</p>
                </LoginHeader>
                <SignUpForm>
                    <form onSubmit={signup}>
                        <SignUpInputs>
                        <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="username"
                                    required="fill this out!"
                                    name="username"
                                    value={newUser.username}
                                    onChange={handleChange}
                                />
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    required="fill this out!"
                                    name="password"
                                    value={newUser.password}
                                    onChange={handleChange}
                                />
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    required="fill this out!"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleChange}
                                />
                        </SignUpInputs>
                    </form>
                    <Button className="Login-button" onClick={signup}>Sign Up</Button>
                </SignUpForm>
                
            </SignUpContainer>
            <Footer/>
        </PageContainer>
    )
};


const mapStateToProps = state => {
    return{
       error: state.error,
       loggingIn: state.loggingIn
    }
}
export default connect(
    mapStateToProps,
    { signup }
)(SignUp);