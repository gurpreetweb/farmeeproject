import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Registerstudent = React.lazy(() => import('./views/Pages/Registerstudent'));
const Universitycontact = React.lazy(() => import('./views/Pages/Universitycontact'));
const Loginstudent = React.lazy(() => import('./views/Pages/Loginstudent'));
const Studentforgot = React.lazy(() => import('./views/Pages/Studentforgot'));
const Passreset = React.lazy(() => import('./views/Pages/Passreset'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/Registerstudent" name="Register Page" render={props => <Registerstudent {...props}/>} />
              <Route exact path="/Universitycontact" name="Register Page" render={props => <Universitycontact {...props}/>} />
              <Route exact path="/Loginstudent" name="Register Page" render={props => <Loginstudent {...props}/>} />
              <Route exact path="/Studentforgot" name="Register Page" render={props => <Studentforgot {...props}/>} />
              <Route exact path="/Passreset" name="Register Page" render={props => <Passreset {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
