import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";
import { fundoClaro } from "../UI/variaveis"

const StyleContainer = styled.div`
  background-color: ${ fundoClaro };
  min-height: 90vh;
  padding: 0px 15vw;
`
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Container = () => {
  return (
    <StyleContainer>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </StyleContainer>
  );
};

export default Container;
