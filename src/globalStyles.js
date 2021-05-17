import styled, { css, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
   } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  /* color: #fff; */

  @media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Wrapper = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0B5B')};
  /* color: #fff; */
  padding: 20px 0;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? '#FFC636' : '#0C4ADA')};
  color: ${({ primary }) => (primary ? '#0C4ADA' : '#FFC636')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  padding: ${({ big }) => (big ? '12px 64px' : '10px 17px')};
  border-radius: 50px;
  white-space: nowrap;
  margin: 10px 10px 10px 0;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;

  ${(props) =>
    props.danger &&
    css`
      background: crimson;
      color: white;
    `}
  /* ${(props) =>
    props.subscribeBorder &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `} */
  &:hover {
    transition: all 0.3s ease-out;
    background: #000;
    background-color: ${({ primary }) => (primary ? '#0C4ADA' : '#FFC636')};
    color: ${({ primary }) => (primary ? '#FFC636' : '#0C4ADA')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const H1 = styled.h1`
  margin-bottom: 24px;
  font-size: 47px;
  font-size: clamp(1.8rem, -0.3333rem + 4.4444vw, 3rem);
  line-height: 1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `} /* @media screen and (max-width: 960px) {
    font-size: 30px;
  } */
`;
export const H2 = styled.h2`
  font-size: 20px;
  padding: 0;
  color: #0c4ada;
  margin-bottom: 16px;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.big &&
    css`
      font-size: 20px;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
    @media screen and (max-width: 960px) {
    text-align: left;
    padding-bottom: 10px;
  }
`;
export const H3 = styled.h3`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  /* font-weight: 700; */
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Paragraph = styled.p`
  text-align: left;
  font-size: 16px;
  color: #666a75;
  padding: 2px 0;
  /* margin-bottom: 16px; */
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.big &&
    css`
      font-size: 20px;
    `}
  ${(props) =>
    props.small &&
    css`
      font-size: 14px;
    `}
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;
export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const FlexCol = `
display: flex;
flex-direction: column;
`;
export const FlexRow = `
display: flex;
flex-direction: row;
`;

export default GlobalStyle;
