import styles from './app.module.scss';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Registration from './views/Registration';
import Contacts from './views/Contacts';

export default function App() {
  return (
    <div className={styles.mainContainer}>
      <Navigation />
      <Switch>
        <Route path="/register" exact>
          <Registration />
        </Route>

        <Route path="/contacts" exact>
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}
