import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.module.scss';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Registration from './views/Registration';
import Contacts from './views/Contacts';
import Login from './views/Login';
import Home from './views/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as operation from './redux/operation';
import { getIsLoggedIn } from './redux/selectors';

export default function App() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    dispath(operation.fetchCurrentUser());
  }, [dispath]);
  return (
    <div className={styles.mainContainer}>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/contacts">{isLoggedIn && <Contacts />}</Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
