import styled, { css } from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';

export const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  padding: 1.6rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 15px;
  font-size: 24px;
`;

// export const FooterSubText = styled.p`
//   margin-bottom: 0px;
//   font-size: 20px;
// `;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
margin-top: 10px;
  @media screen and (max-width: 960px) {
    margin-top: 5px;
    flex-direction: row;
    width: 90%;
  }
`;

export const FormInput = styled.input`
  padding: 8px 15px;
  border-radius: 0;
  margin-right: 10px;
  outline: none;
  /* border: none; */
  font-size: 16px;
  border: 2px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    /* margin: 0 0 16px 0; */
    font-size: 13px;
    padding: 7px 15px;
  }
`;
export const SubscribeButton = styled(Button)`

  ${(props) => props.subscribeBorder && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  @media screen and (max-width: 960px) {
    width: 60%;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 13px;
  }
`;
export const FooterLinksContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding-top: 0px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaReact)`
  margin-right: 10px;
`;

export const CopyRight = styled.p`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
