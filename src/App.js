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
import { Configreducer, persistor, store } from './Redux/Store';
import { SnackbarProvider } from 'notistack';
import Category from './admin/componente/Category';
import Productadmin from './admin/componente/Productadmin';
import Categoriesadmin from './admin/componente/Categoriesadmin';
import Productdetails from './admin/componente/Productdetails';
import Cart from './admin/componente/Cart';
import { PersistGate } from 'redux-persist/integration/react'
import Placeorder from './admin/componente/Placeorder';
import Orderadmin from './admin/componente/Orderadmin';


function App() {
  // let store = Configreducer()
  // let { store, persistor } = Configreducer()
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider maxSnack={3}>
          <Provider store={store}>
            <Header />
            <Switch>
              <PublicRoute exact path={"/Home"} component={Home} />
              <PublicRoute exact path={"/About"} component={About} />
              <PrivateRoute exact path={"/Testimonial"} component={Testimonial} />
              <PublicRoute exact path={"/Product"} component={Product} />
              <PublicRoute exact path={"/Why"} component={Why} />
              <PublicRoute restricted={true} exact path={"/Logins"} component={Logins} />
              <PublicRoute exact path={"/Category"} component={Category} />
              <PublicRoute exact path={"/Categoriesadmin"} component={Categoriesadmin} />
              <PublicRoute exact path={"/Productadmin"} component={Productadmin} />
              <PublicRoute exact path={"/Productdetails"} component={Productdetails} />
              <PublicRoute exact path={"/Cart"} component={Cart} />
              <PublicRoute exact path={"/Placeorder"} component={Placeorder} />
              <PublicRoute exact path={"/Orderadmin"} component={Orderadmin} />
            </Switch>
          </Provider>
          <Footer />
        </SnackbarProvider>
      </PersistGate>
      <div lensStyle={{
        background: 'hsla(0, 0%, 100%, .3)',
        border: '1px solid #ccc',
      }}>
      </div>
    </>
  );
}

export default App;
