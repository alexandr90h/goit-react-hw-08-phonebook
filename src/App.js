import styles from './app.module.scss';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Registration from './views/Registration';
import Contacts from './views/Contacts';
import Login from './views/Login';
import Home from './views/Home';

export default function App() {
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

        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
