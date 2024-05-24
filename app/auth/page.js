import React from 'react';
import {AuthForm} from "@/app/components/AuthForm/AuthForm";
import classes from './auth.module.css';

const AuthPage = () => {
    return (
        <div className={classes["auth-container"]}>
            <AuthForm/>
        </div>
    );
};

export default AuthPage;