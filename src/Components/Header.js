import React from "react";
import styled from "styled-components";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigation>
          <Nav to="/">
            <Icon>
              <AccountBalanceIcon />
            </Icon>
            <span>HOME</span>
          </Nav>
          <Nav to="/add">
            <Icon>
              <SchoolIcon />
            </Icon>
            <span>ADD</span>
          </Nav>
        </Navigation>

        <Register>
          <Nav to="/register">
            <Icon>
              <LockOpenIcon />
            </Icon>
            <span>Register</span>
          </Nav>
        </Register>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Register = styled.div`
  display: flex;
`;
const Logo = styled.img`
  margin: 0 20px;
  border-radius: 3px;
  width: 150px;
  height: 50px;
  object-fit: contain;
`;

const Icon = styled.div`
  margin: 10px;
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  transition: all 350ms;
  border-radius: 3px;

  &.active {
    background-color: rgba(255, 255, 255, 0.4);
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #004080;
  color: white;
`;
