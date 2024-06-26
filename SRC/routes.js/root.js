/* eslint-disable no-nested-ternary */
import { Outlet, NavLink, useNavigation } from 'react-router-dom';

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar">
        <h1>Galactic Travel</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) => (isActive
                  ? 'active'
                  : isPending
                    ? 'pending'
                    : '')}
              >
                Rockets

              </NavLink>
            </li>
            <li>
              <NavLink
                to="missions/"
                className={({ isActive, isPending }) => (isActive
                  ? 'active'
                  : isPending
                    ? 'pending'
                    : '')}
              >
                Missions

              </NavLink>
            </li>
            <li className="separator" />
            <li>
              <NavLink
                to="myprofile/"
                className={({ isActive, isPending }) => (isActive
                  ? 'active'
                  : isPending
                    ? 'pending'
                    : '')}
              >
                My Profile

              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  );
}