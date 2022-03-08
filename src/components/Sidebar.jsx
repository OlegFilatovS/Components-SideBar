import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLORS from '../models/colors';
import Logo from '../assets/account.png';

const SidebarContainer = styled.aside`
  width: 75px;
  border-right: 1px solid ${COLORS.lightGray};
  margin-top: -1rem;
  padding: 1rem;
`;

const LogoContainer = styled.div``;
const SideBarMenu = styled.div``;
const BottomControl = styled.div``;

function Sidebar(props) {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="Channel Logo" />
        </Link>
      </LogoContainer>
      <SideBarMenu>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt earum
        illum laboriosam magnam voluptatibus? Dolore fugit in laudantium nemo
        voluptatum?
      </SideBarMenu>
      <BottomControl>Bottom</BottomControl>
    </SidebarContainer>
  );
}

export default Sidebar;
