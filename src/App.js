import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import MyAccountPage from "./pages/MyAccountPage";
import SignInPage from "./pages/SignInPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route path='/my-account' component={MyAccountPage}/>
                <Route path='/sign-in' component={SignInPage}/>
                <Route path='/about-us' component={AboutUsPage}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
);
}

export default App;
