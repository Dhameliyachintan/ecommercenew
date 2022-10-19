import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utils';



function PublicRoute({ component: Component, restricted = false, ...rest }) {
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)
    console.log(auth);

    // console.log(auth.user !== null && user.user.role === 'user' && restricted);

    return (
        <Route{...rest} render={props => (
            auth.user !== null && restricted ?
                <>
                {/* <Header/> */}
                    <Redirect to={"/"} />
                </>
                :
                <>
                    <Component {...props} />
                </>
        )}
        />
    );
}

export default PublicRoute;