import '../node_modules/bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import About from './container/About';
import Footer from './component/Footer/Footer';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './container/Home';
import Testimonial from './container/Testimonial';
import Product from './container/Product';
import Why from './container/Why';
import Logins from './container/Logins';
import PublicRoute from './container/Route/PublicRoute';
import PrivateRoute from './container/Route/PrivateRoute';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { SnackbarProvider } from 'notistack';
import Category from './admin/componente/Category';
import Productadmin from './admin/componente/Productadmin';
import Categoriesadmin from './admin/componente/Categoriesadmin';
// import Productdetails from './admin/componente/Productdetails';

function App() {
  // let store = Configreducer()
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <Header />
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
            {/* <PublicRoute exact path={"/Productdetails"} component={Productdetails} /> */}
          </Switch>
        </Provider>
        <Footer />
      </SnackbarProvider>
    </>
  );
}

export default App;
