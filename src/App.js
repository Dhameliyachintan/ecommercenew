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

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Testimonial"} component={Testimonial} />
        <Route exact path={"/Product"} component={Product} />
        <Route exact path={"/Why"} component={Why} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
