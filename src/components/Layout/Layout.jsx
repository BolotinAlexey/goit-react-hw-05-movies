import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrap, NavLinkStyled } from './Layout.styled';

function Layout() {
  return (
    <Wrap>
      <header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
          alt="logo"
        />
      </footer>
    </Wrap>
  );
}

export default Layout;
