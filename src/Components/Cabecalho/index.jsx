import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";

const StyleHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const ButtonCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: ${(props) => props.primary ? "white" : corPrimaria};
  background: ${(props) => props.primary ? corPrimaria : "white"};
`

const Cabecalho = () => {
  return (
    <StyleHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <ButtonCabecalho  href="https://google.com">
          Ajuda
        </ButtonCabecalho>
        <ButtonCabecalho primary href="https://google.com">
          Sair
        </ButtonCabecalho>
      </div>
    </StyleHeader>
  );
};

export default Cabecalho;
