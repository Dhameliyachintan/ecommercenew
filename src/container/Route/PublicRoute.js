import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import { isLogin } from '../Utils';

function PublicRoute({ component: Component, restricted = false, ...rest }) {

    let auth = useSelector(state => state.auth);
    console.log(auth.user);
    
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <>
                    <Header />
                    <Redirect to={"/"} />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </>
        )}
        />
    );
}

export default PublicRoute;
