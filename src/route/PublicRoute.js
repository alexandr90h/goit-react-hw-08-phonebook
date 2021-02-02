import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...props
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouRedirect = restricted && isLoggedIn;

  return (
    <Route {...props}>{shouRedirect ? <Redirect to="/" /> : children}</Route>
  );
}
