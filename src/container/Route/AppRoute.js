import React from 'react';
import { Switch } from 'react-router-dom';
import Categoriesadmin from '../../admin/componente/Categoriesadmin';
import Orderadmin from '../../admin/componente/Orderadmin';
import Productadmin from '../../admin/componente/Productadmin';
import Cart from '../../admin/container/Cart';
import Category from '../../admin/container/Category';
import Placeorder from '../../admin/container/Placeorder';
import Productdetails from '../../admin/container/Productdetails';
import About from '../About';
import Home from '../Home';
import Logins from '../Logins';
import Product from '../Product';
import Testimonial from '../Testimonial';
import Why from '../Why';
import ClientRoute from './ClientRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRoute(props) {
    return (
        <div>
            <Switch>
              <PublicRoute exact path={"/"} component={Home} />
              <PublicRoute exact path={"/About"} component={About} />
              <PrivateRoute exact path={"/Testimonial"} component={Testimonial} />
              <PublicRoute exact path={"/Product"} component={Product} />
              <PublicRoute exact path={"/Why"} component={Why} />
              <PublicRoute restricted={true} exact path={"/Logins"} component={Logins} />
              <PublicRoute exact path={"/Category"} component={Category} />
              <PublicRoute exact path={"/Categoriesadmin"} component={Categoriesadmin} />
              <PublicRoute exact path={"/Productadmin"} component={Productadmin} />
              <PublicRoute exact path={"/Productdetails"} component={Productdetails} />
              <PublicRoute exact path={"/Placeorder"} component={Placeorder} />
              <ClientRoute exact path={"/Cart"} component={Cart} />
              <PublicRoute exact path={"/Orderadmin"} component={Orderadmin} />
            </Switch>
        </div>
    );
}

export default AppRoute;