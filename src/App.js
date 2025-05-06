import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header';
import HomePage from './components/home';
import AboutPage from './components/about';
import ProductPage from './components/product';
import ContactPage from './components/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
