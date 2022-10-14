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
import Productadmin from './admin/componente/Productadmin';
import Categoriesadmin from './admin/componente/Categoriesadmin';
import { PersistGate } from 'redux-persist/integration/react'
import Orderadmin from './admin/componente/Orderadmin';
import Productdetails from './admin/container/Productdetails';
import Category from './admin/container/Category';
import Placeorder from './admin/container/Placeorder';
import Cart from './admin/container/Cart';
import AppRoute from './container/Route/AppRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  // let store = Configreducer()
  // let { store, persistor } = Configreducer()
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider maxSnack={3}>
          <Provider store={store}>
            <AppRoute />
          </Provider>
        </SnackbarProvider>
      </PersistGate>
      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
      <div lensStyle={{
        background: 'hsla(0, 0%, 100%, .3)',
        border: '1px solid #ccc',
      }}>
      </div>
    </>
  );
}

export default App;
