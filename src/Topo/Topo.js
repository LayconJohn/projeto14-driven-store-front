import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoList } from "react-icons/io5";
export default function Topo() {
  const [menu, setMenu] = useState(false);
  return (
    <Container>
      <p>DrivenStore</p>
      <span>
        <IoList size={"25px"} onClick={() => setMenu(!menu)} />
      </span>
      {!menu ? (
        ""
      ) : (
        <Menu>
          <Link to="/login">
            <h2>Login</h2>
          </Link>
          <Link to="/carrinho">
            <h2>Carrinho</h2>
          </Link>
        </Menu>
      )}
    </Container>
  );
}
const Container = styled.div`
  p {
    font-family: "Lobster", cursive;
    font-size: 50px;
    margin: 5px auto 0 30px;
    color: #ffffff;
    text-shadow: 2px 2px 2px #cfb15c;
  }
  span {
    position: fixed;
    left: calc(100% - 50px);
    top: 25px;
  }
`;
const Menu = styled.div`
  background-color: #ffffff;
  position: fixed;
  width: 50vw;
  height: 50vw;
  left: calc(100% - 200px);
  top: 50px;
  z-index: 1;
  h2 {
    margin: 15px;
  }
`;
