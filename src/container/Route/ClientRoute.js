import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';

function ClientRoute({ component: Component, ...rest }) {
    let auth = useSelector(state => state.auth);
    console.log(auth.user);

    return (
        <Route {...rest} render={props => (
            auth.user !== null ?
                <>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Redirect to={"/Logins"} />
                    <Footer />
                </>
        )}
        />
    );
}

export default ClientRoute;