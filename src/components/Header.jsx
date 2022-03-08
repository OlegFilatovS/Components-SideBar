import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import COLORS from '../models/colors';

const MenuIcon = styled(FaBars)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: ${COLORS.lightGray};
  &:hover {
    fill: ${COLORS.darkGray};
  }
`;

const MenuIconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.4);
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
`;

function Header({}) {
  const showSidebar = () => {console.log('showing sidebar')};
  return (
    <HeaderContainer className="header">
      <MenuIconButton onClick={showSidebar}>
        <MenuIcon />
      </MenuIconButton>
    </HeaderContainer>
  );
}

export default Header;
