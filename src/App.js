import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.module.scss';
import { Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Registration from './views/Registration';
import Contacts from './views/Contacts';
import Login from './views/Login';
import Home from './views/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import * as operation from './redux/operation';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import Loader from 'react-loader-spinner';

export default function App() {
  const dispath = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  useEffect(() => {
    dispath(operation.fetchCurrentUser());
  }, [dispath]);
  return (
    !isLoading && (
      <div className={styles.mainContainer}>
        <Navigation />
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
          }
        >
          <Switch>
            <PublicRoute path="/" exact>
              <Home />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <Registration />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <Login />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <Contacts />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    )
  );
}
