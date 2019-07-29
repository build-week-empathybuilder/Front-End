import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #602350;
    position: fixed;
    z-index: 10000;
`

const NavigationBar = styled.div`
    width: 70vw;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    z-index: 1000;
`

const NavLogo = styled.div`
    font-weight: bold;
    font-size: 1.7rem;
    color: #EDEDED;
    cursor: default;
`

const Links = styled.div`
    .active{
        font-weight: bold;
        text-decoration: underline;
    }

    a{
        color: #ededed;
        margin: 0px 20px;
        font-size: 1.4rem;
        text-decoration: none;
        &:hover{
            color: #F9BBB1
            transition-duration: 0.2s;
        }
    }
`

const NavBar = () => {
    
    return(
        <NavContainer>
            <NavigationBar>
                <NavLogo>Empathy Builder</NavLogo>
                <Links>
                    {localStorage.getItem('jwt') ? (
                        <NavLink to='/login'>
                            Log Out
                        </NavLink>
                    ) : (
                        <div>
                            <NavLink to='/login'>Log In</NavLink>
                            <NavLink to='/sign-up'>Sign Up</NavLink>
                        </div>
                    )}
                </Links>
            </NavigationBar>
        </NavContainer>
    );
};

export default NavBar;