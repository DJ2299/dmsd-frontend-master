/* eslint-disable no-unused-vars */
import { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { authenticationValidator } from './store/actions';
// import { Spinner } from './components';
import { guestRoutes } from './routes';

import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/owl.carousel.min.css';

// Custom styles
import './assets/css/style.css';
import './assets/css/animate.css';
import './assets/css/svg-icons-animate.css';
import './assets/css/dev.css';
import { Loader } from './components';

function App() {
  const tokenPresent = !!useSelector(state => state.auth.authToken);
  const { authToken, isLoginLoading } = useSelector(state => state.auth);
  const [mounted, setMounted] = useState(false);
  // const role = !!useSelector(state => state.auth.userRole);
  const pathname = window.location.pathname.split('/')[1];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationValidator());
    setMounted(true);
  }, []);

  const redirectHandler = () => {
    const guestRoute = guestRoutes
      .filter(item => item.redirectRoute === undefined)
      .map(item => item.path);
    return !guestRoute.includes(`/${pathname}`) && localStorage.getItem('authToken') == null ? (
      <Redirect to="/" />
    ) : null;
  };
  let mainContent;
  const renderContent = () => {
    mainContent = (
      <>
        {guestRoutes.map(
          route =>
            route.redirectRoute === undefined && (
              <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
                <route.component />
              </Route>
            ),
        )}
        {redirectHandler()}
      </>
    );
    if (tokenPresent) {
      mainContent = (
        <>
          <Route path="/" component={lazy(() => import('./views/MainContainer/MainContainer'))} />
        </>
      );
    }
    return mainContent;
  };
  useEffect(() => {
    renderContent();
  }, [authToken]);
  return (
    <Suspense fallback={<Loader isFullLoader />}>
      <BrowserRouter>
        <Switch>{isLoginLoading ? <Loader className="h-100vh" /> : renderContent()}</Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
