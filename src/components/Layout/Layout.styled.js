import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  padding: 0 10px;

  header {
    padding: 10px 0;
    margin-bottom: 20px;
    z-index: 1000;
    -webkit-box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
    box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
  }

  footer {
    /* position: absolute;
    bottom: 0;
    left: 0;
    right: 0; */
    /* padding: 10px 0;
    -webkit-box-shadow: 0px 11px 15px 8px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 11px 15px 8px rgba(66, 68, 90, 1);
    box-shadow: 0px 11px 15px 8px rgba(66, 68, 90, 1); */
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 10px;
  font-size: 1.5em;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transform: translate(1);

  &.active {
    color: orange;
  }
`;
