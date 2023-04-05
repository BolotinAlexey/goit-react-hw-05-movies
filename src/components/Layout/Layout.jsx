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
    </Wrap>
  );
}

export default Layout;
