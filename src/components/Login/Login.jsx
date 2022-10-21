import { connect } from 'react-redux';
import React from "react";
import LoginForm from "./LoginForm";
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import s from './Login.module.css' 


const Login = (props) => {
    if(props.isAuth) return  <Navigate to='/profile/6724' />
    return (
        <div className={s.login}>
            <h1 className={s.loginTitle}>Login</h1>
            <LoginForm login={props.login} />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login)
