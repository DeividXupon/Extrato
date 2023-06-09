import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";
import { fundoClaro } from "../UI/variaveis"
import Extrato from "../Extrato";

const StyleContainer = styled.div`
  background-color: ${ fundoClaro };
  min-height: 90vh;
  padding: 0px 10vw;
`
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Container = () => {
  return (
    <StyleContainer>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta>Conta 1</Conta>
        <Extrato></Extrato>
      </Conteudo>
    </StyleContainer>
  );
};

export default Container;
