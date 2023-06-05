import Styled from "styled-components";

export const Icone = Styled.img`
  height: 30px;
  width: 30px;
`
export const Box = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 15px;
  margin: 0px 5px 0px 5px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`

export const Botao = Styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`
export const Saldo = Styled.div`
  font-weight: 700;
  font-size: 32px;
`

export const Detalhe = Styled.span`
  color: #41d3be;
  font-size: 24px;
`
